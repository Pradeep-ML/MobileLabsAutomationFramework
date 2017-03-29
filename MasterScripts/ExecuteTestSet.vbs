'#################################Launch QTP####################################################
Option Explicit
'###############################################################################################

'Declare all variables
Dim blnAddInFound
Dim strCurrentPath
Dim blnParentFolderFound
Dim strMasterExecutionPath
Dim StartTime
Dim objQTP
Dim objWScript
Dim objFSO
Dim objExcel
Dim objWorkbook
Dim objWorksheet
Dim intColCount
Dim blnValueFound
Dim strExecutionPath
Dim strProcessesToKill
Dim arrProcessesToKill
Dim intCounter
Dim i,j,k,n,o,p,q,r
Dim arrTests
Dim strTestPath
Dim strRootPath
Dim objQTPResultsOpt
Dim strAddIns
Dim trustNeeded
Dim arrAddIns()
Dim item
Dim objShell
Dim blnNotifications
Dim strSubject,strMessage,strEmailIds
Dim intRowCount
Dim blnEmailSent,strAttachmentPath
Dim strBuild,strdCUser,strDeviceModel,strDeviceOS,strDeviceOSVersion,strTestSet,strAppId,strdCIP

If WScript.Arguments.length = 0 Then
   Set objShell = CreateObject("Shell.Application")
   objShell.ShellExecute "wscript.exe", Chr(34) & WScript.ScriptFullName & Chr(34) & " uac", "", "runas", 1
   
   Set objShell = Nothing
Else

strProcessesToKill = "cmd.exe,EXCEL.EXE,deviceViewer.exe,QTPro.exe,QTAutomationHost.exe,UFT.exe"
arrProcessesToKill = Split(strProcessesToKill,",")

KillProcess arrProcessesToKill

'Get current directory
Set objWScript = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")
strCurrentPath = WScript.ScriptFullName
strRootPath = strCurrentPath

'Loop until "MobileLabs Automation Framework" folder is found
blnParentFolderFound = True
Do While LCase(Replace(Split(strRootPath,"\")(UBound(Split(strRootPath,"\"))), " ", "")) <> "mobilelabsautomationframework"
	strRootPath = objFSO.GetParentFolderName(strRootPath)
	'Exit if reaches the system drive
	If InStr(1, strRootPath, "\") = 0 Then
		blnParentFolderFound = False
		Exit Do
	End If
Loop

'Define the path of the Root Folder: <MobileLabs Automation Framework>
If blnParentFolderFound Then
	If Right(strRootPath,1) <> "\" Then
		strRootPath = strRootPath & "\"
	End If
	If Replace(objFSO.GetFolder(strRootPath).Name, " ", "") <> "MobileLabsAutomationFramework" Then
		WScript.Quit
	End If
Else
	MsgBox "Error: ExecuteTestSet.vbs file is being executed from a wrong location: " & objWScript.CurrentDirectory
	WScript.Quit
End If

'Read values from TestLab.xlsx
strMasterExecutionPath = strRootPath & "Environment\TestLab.xlsx"
Set objExcel = CreateObject("Excel.Application")
objExcel.Visible = False
Set objWorkbook = objExcel.Workbooks.Open(strMasterExecutionPath)	
Set objWorksheet = objExcel.ActiveWorkbook.Worksheets("TestSet")

intColCount = objWorksheet.UsedRange.Columns.Count
	blnValueFound = True
	trustNeeded = False
	strAddIns = ""
	For i = 1 To intColCount
		If LCase(objWorksheet.Cells(1,i).Value) = "addins" Then
			strAddIns = objWorksheet.Cells(2,i).Value
			
			If InStr(1,strAddIns,"Mobile Labs Trust",1) Then
				trustNeeded = True
			End If
			
			o = 0
			For Each item in Split(strAddIns,",")
				Redim Preserve arrAddIns(o)
				arrAddIns(o) = Trim(item)
				o = o + 1
			Next
			Exit For
		End If
		If i = intColCount Then
			blnValueFound = False
		End If
	Next
	
If Not(blnValueFound) Then
	MsgBox "Couldn't find the list of AddIns to load. Please check TestLab.xlsx and add a correct value under addIns!"
End If

Set objWorksheet = objExcel.ActiveWorkbook.Worksheets("TestSet")
intColCount = objWorksheet.UsedRange.Columns.Count
blnNotifications = False
	For p = 1 To intColCount
		If LCase(objWorksheet.Cells(1,p).Value) = "emailnotifications" Then
			blnNotifications = objWorksheet.Cells(2,p).Value
			
			If blnNotifications = "" Then
				blnNotifications = False
			End If
		ElseIf LCase(objWorksheet.Cells(1,p).Value) = "dcversion" Then
			strBuild = objWorksheet.Cells(2,p).Value
			
		ElseIf LCase(objWorksheet.Cells(1,p).Value) = "dcip" Then
			strdCIP = objWorksheet.Cells(2,p).Value
		
		ElseIf LCase(objWorksheet.Cells(1,p).Value) = "dcuser" Then
			strdCUser = objWorksheet.Cells(2,p).Value
		
		ElseIf LCase(objWorksheet.Cells(1,p).Value) = "devicemodel" Then
			strDeviceModel = objWorksheet.Cells(2,p).Value
			
		ElseIf LCase(objWorksheet.Cells(1,p).Value) = "deviceos" Then
			strDeviceOS = objWorksheet.Cells(2,p).Value
		
		ElseIf LCase(objWorksheet.Cells(1,p).Value) = "deviceosversion" Then
			strDeviceOSVersion = objWorksheet.Cells(2,p).Value
		
		ElseIf LCase(objWorksheet.Cells(1,p).Value) = "testfolder" Then
			strTestSet = objWorksheet.Cells(2,p).Value
		
		ElseIf LCase(objWorksheet.Cells(1,p).Value) = "appid" Then
			strAppId = objWorksheet.Cells(2,p).Value
		End If
	Next
	
'Send email for execution start
If blnNotifications Then
	Set objWorksheet = objExcel.ActiveWorkbook.Worksheets("Data")
	intColCount = objWorksheet.UsedRange.Columns.Count
	strEmailIds = ""
	r = 2
	intRowCount = objWorksheet.UsedRange.Rows.Count
		For q = 1 To intColCount
			If LCase(objWorksheet.Cells(1,q).Value) = "emailids" Then				
				For r=2 To intRowCount-1
					strEmailIds = strEmailIds & objWorksheet.Cells(r,q).Value & ","
					
					If objWorksheet.Cells(r,q).Value = "" Then
						Exit For
					End If
				Next
			End If
		Next
	If strEmailIds <> "" Then
		strEmailIds = Trim(Left(strEmailIds,Len(strEmailIds)-1))
	End If
		
	strSubject = "Test execution started!"
	strMessage = "Start Time:" & Time & VBNewLine & "dC Server: " & strdCIP & VbNewLine & "dC version: " & strBuild & VbNewLine & "Username: " & strdCUser _
	& VbNewLine & "Device Model: " & strDeviceModel & VbNewLine & "Device OS: " & strDeviceOS & VbNewLine & "Device OS Version: " & strDeviceOSVersion _
	& VbNewLine & "Test Set: " & strTestSet & VbNewLine & "App under test: " & strAppId & VbNewLine & VbNewLine & "System Information:" & VbNewLine _
	& GetSystemInfo
		
	'strAttachmentPath = strRootPath & "\Results\Attachment.zip"
	SendNotification strSubject, strMessage, strEmailIds, ""	
End If

'Create an instance of QTP
Set objQTP = CreateObject("QuickTest.Application")
'Load required Add-ins
objQTP.SetActiveAddins arrAddIns
'For n=0 To UBound(arrAddIns)
	'MsgBox "Addin:" & arrAddIns(n)
	'objQTP.SetActiveAddins Array(arrAddIns(n))
'Next

objQTP.Launch
objQTP.Visible = True
objQTP.WindowState = "Maximized" 'Maximizes the application window of the QTP 
objQTP.ActivateView "ExpertView" 'Displays the Expert View of the QTP
objQTP.Options.Run.ViewResults = False

'Report settings
objQTP.Options.Run.ImageCaptureForTestResults = "OnError"
objQTP.Options.Run.ViewResults = False

'Check if Mobile Labs Trust is installed or not
If trustNeeded Then
	blnAddInFound = False
	For intCounter = 1 To objQTP.Addins.Count
		If StrComp(Replace(objQTP.Addins.Item(intCounter).Name, " ", ""),  "mobilelabstrust", 1) = 0 Then
			blnAddInFound = True
			Exit For
		End If
	Next

	If Not(blnAddInFound) Then
		MsgBox "Mobile Labs Trust was not found in the installed add-ins list."
		objQTP.Quit
	End If
End If

'If Not(blnAddInFound) Then
	'MsgBox "Mobile Labs Trust was not found in the installed add-ins list."
	'objQTP.Quit
'Else
	
	'Execute all tests in the testFolder defined in %\MobileLabsAutomationFramework\Environment\TestLab.xlsx
	'strMasterExecutionPath = strRootPath & "Environment\TestLab.xlsx"
	'Set objExcel = CreateObject("Excel.Application")
	'objExcel.Visible = False
	'Set objWorkbook = objExcel.Workbooks.Open(strMasterExecutionPath)	
	'Set objWorksheet = objExcel.ActiveWorkbook.Worksheets("TestSet")
	
	'Get the max column occupied in the excel file 
	Set objWorksheet = objExcel.ActiveWorkbook.Worksheets("TestSet")
	intColCount = objWorksheet.UsedRange.Columns.Count
	blnValueFound = True
	strExecutionPath = ""
	For k = 1 To intColCount
		If LCase(objWorksheet.Cells(1,k).Value) = "testfolder" Then
			strTestPath = objWorksheet.Cells(2,k).Value
			If Left(strTestPath,1) = "\" Then
				strTestPath = Right(strTestPath,Len(strTestPath)-1)
			End If
			strExecutionPath = strRootPath & strTestPath
			Exit For
		End If
		If k = intColCount Then
			blnValueFound = False
		End If
	Next
	
	If blnValueFound Then
		arrTests = GetTestSet(strExecutionPath)
		
		For j = 0 To UBound(arrTests)	
			'Open a test and associate a function library to the test
			objQTP.Open arrTests(j),False
			objQTP.Test.Settings.Run.OnError = "NextStep"
			
			'Set the function libraries and ORs folders in Tools > Options > GUI Testing > Folders
			objQTP.Folders.RemoveAll
			objQTP.Folders.Add strRootPath & "FunctionLibraries"
			objQTP.Folders.Add strRootPath & "ORs"
			
			' Set the results location
			Set objQTPResultsOpt = CreateObject("QuickTest.RunResultsOptions") ' Create the Run Results Options object
			objQTPResultsOpt.ResultsLocation = WScript.CreateObject("Scripting.FileSystemObject").GetSpecialFolder(2) & "\QTPtempResults\" 
			
			'Execute the test
			objQTP.Test.Run objQTPResultsOpt
			
			StartTime = Minute(Now)
			Do While objQTP.Test.IsRunning
				objWScript.Sleep 10000
				'Exit if the execution takes more than 30 minutes
				If Minute(Now) - StartTime > 60 Then
					'Stop the test and exit wait
					objQTP.Test.Stop
					MsgBox "Execution for test: " & arrTests(j) & "took more than 60 minutes, hence ending execution for this test."
					Exit Do
				End If
			Loop
		
		Next
		
		strSubject = "Test execution completed!"
		strMessage = "End Time:" & Time & VBNewLine & "dC Server: " & strdCIP & VbNewLine & "dC version: " & strBuild & VbNewLine & "Username: " & strdCUser _
		& VbNewLine & "Device Model: " & strDeviceModel & VbNewLine & "Device OS: " & strDeviceOS & VbNewLine & "Device OS Version: " & strDeviceOSVersion _
		& VbNewLine & "Test Set: " & strTestSet & VbNewLine & "App under test: " & strAppId & VbNewLine & VbNewLine & "System Information:" & VbNewLine _
		& GetSystemInfo
			
		strAttachmentPath = strRootPath & "\Results\Attachment.zip"
		SendNotification strSubject, strMessage, strEmailIds, strAttachmentPath
		
	Else
		MsgBox "Did not find the testFolder column in " & strMasterExecutionPath & " please check the file. Exiting...!!"
		WScript.Quit
	End If

	objWorkbook.Close
	objExcel.Quit

	Set objWorksheet = Nothing
	Set objWorkbook = Nothing
	Set objExcel = Nothing
	Set objFSO = Nothing
	Set objWScript = Nothing

	'Close QTP
	objQTP.Quit
	Set objQTPResultsOpt = Nothing
	Set objQTP = Nothing
'End If
End If

'##########################################################################################################################
''@Function:        GetTestSet
''@Description: 	Get the test folder paths as an array
''@Created By: 		Naveen
''@Created On: 		9-Sept-2015
''--------------------------------------------------------------------------------------------------------------------------
''@Param Name: 		strTestsFolderPath
''@Param Type: 		String
''@Param Drtn: 		In
''@Param Desc: 		The folder that contains all the tests to be returned
''--------------------------------------------------------------------------------------------------------------------------

Function GetTestSet(ByVal strTestsFolderPath)
	Dim objFSO1
	Dim objParentFolder
	Dim objSubFolder
	Dim Folder
	
	Set objFSO1 = CreateObject ("Scripting.FileSystemObject")
	Set objParentFolder = objFSO1.GetFolder(strTestsFolderPath)
	Set objSubFolder = objParentFolder.SubFolders
    For Each Folder in objSubFolder
		GetTestSet = Trim(GetTestSet & Folder.Path & "||")
	Next
		
	Set objFSO1 = Nothing
	Set objParentFolder = Nothing
	Set objSubFolder = Nothing
		
	GetTestSet = Left(GetTestSet,Len(GetTestSet)-2)
	GetTestSet = Split(GetTestSet,"||")
End Function

'##########################################################################################################################
''@Sub:        		KillProcess
''@Description: 	Kills all processes passed in as an array
''@Created By: 		Naveen
''@Created On: 		9-Sept-2015
''--------------------------------------------------------------------------------------------------------------------------
''@Param Name: 		arrProcessesToKill
''@Param Type: 		Array
''@Param Drtn: 		In
''@Param Desc: 		An array with the names of processd to kill
''--------------------------------------------------------------------------------------------------------------------------
Sub KillProcess(ByVal arrProcessesToKill)
			
	Dim strComputer
	Dim objWMIService
	Dim colProcess
	Dim objProcess
	Dim intCount
		
	For intCount = 0 to (Ubound(arrProcessesToKill))
		strComputer = "."

		'Returning a reference to an window automation object
		Set objWMIService = GetObject("winmgmts:" _
		& "{impersonationLevel=impersonate}!\\" _ 
		& strComputer & "\root\cimv2") 

		'Executing query to get the process name
		Set colProcess = objWMIService.ExecQuery _
		("Select * from Win32_Process " )

		'Search for a process name and kill the process
		For Each objProcess in colProcess
			If objProcess.Name= arrProcessesToKill(intCount) Then
				objProcess.Terminate
			End If
		Next
	Next

End Sub
	
	
'##########################################################################################################################
''@Sub:        		SendNotification
''@Description: 	Sends an email with passed in message to a specific set of email Ids
''@Created By: 		Naveen
''@Created On: 		28-Mar-2017
''--------------------------------------------------------------------------------------------------------------------------
''@Param Name: 		strSubject
''@Param Type: 		String
''@Param Drtn: 		In
''@Param Desc: 		Email subject
''--------------------------------------------------------------------------------------------------------------------------
''@Param Name: 		strMessage
''@Param Type: 		String
''@Param Drtn: 		In
''@Param Desc: 		Email message
''--------------------------------------------------------------------------------------------------------------------------
''@Param Name: 		strEmailIds
''@Param Type: 		String
''@Param Drtn: 		In
''@Param Desc: 		Target email Ids
''--------------------------------------------------------------------------------------------------------------------------
''@Param Name: 		strAttachmentPath
''@Param Type: 		String
''@Param Drtn: 		In
''@Param Desc: 		Path to the Attachment.zip
''--------------------------------------------------------------------------------------------------------------------------

Sub SendNotification(ByVal strSubject, ByVal strMessage, ByVal strEmailIds, ByVal strAttachmentPath)
	Dim objEmail, objConfigEmail

	'Send notification
	Const fromEmail = "mobilelabsQA@gmail.com"
	Const password = "Basement@D-25"

	Set objEmail = CreateObject("CDO.Message")
	objEmail.From = fromEmail
	objEmail.To = strEmailIds
	objEmail.Subject = strSubject
	objEmail.TextBody = strMessage

	'If WScript.Arguments.Count > 3 Then
	'	objEmail.AddAttachment WScript.Arguments.Item(3)
	'End If
	
	If strAttachmentPath <> "" Then
		objEmail.AddAttachment strAttachmentPath
	End If

	Set objConfigEmail = objEmail.Configuration
	objConfigEmail.Fields("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "smtp.gmail.com"
	objConfigEmail.Fields("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 465
	objConfigEmail.Fields("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2
	objConfigEmail.Fields("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
	objConfigEmail.Fields("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = true
	objConfigEmail.Fields("http://schemas.microsoft.com/cdo/configuration/sendusername") = fromEmail
	objConfigEmail.Fields("http://schemas.microsoft.com/cdo/configuration/sendpassword") = password
	objConfigEmail.Fields.Update

	objEmail.Send

	Set objEmail = Nothing
	Set objConfigEmail = Nothing
End Sub

'##########################################################################################################################
''@Function:        GetSystemInfo
''@Description: 	Gets system information of the test machine and returns a multi-line string
''@Created By: 		Naveen
''@Created On: 		29-Mar-2017
''--------------------------------------------------------------------------------------------------------------------------
Function GetSystemInfo()
	Dim strSystemInfo
	Dim objWMIService, colItems, objItem, objMethod

	'Get System Info
	Set objWMIService = GetObject( "winmgmts:\\.\root\cimv2" )
	Set colItems = objWMIService.ExecQuery( "Select * from Win32_ComputerSystem")', , 48 )

	For Each objItem in colItems
	   For Each objMethod In objItem.Properties_
			Select Case UCase(objMethod.Name)
				Case "CURRENTTIMEZONE"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "DESCRIPTION"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "DNSHOSTNAME"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "Domain"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "MANUFACTURER"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "NAME"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "NUMBEROFPROCESSORS"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "PARTOFDOMAIN"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "PRIMARYOWNERNAME"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "SYSTEMTYPE"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & objMethod.Value & VBNewLine

				Case "TOTALPHYSICALMEMORY"
					strSystemInfo = strSystemInfo & objMethod.Name & ": " & CInt(objMethod.Value/1073741824) & " GB" & VBNewLine

			End Select
	   Next
	Next
	
	GetSystemInfo = strSystemInfo
	
	Set objWMIService = Nothing
	Set colItems = Nothing
End Function