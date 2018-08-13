'##########################################################################################################
' Objective: Covered differet scenarios identified from manual test cases.

'#######################################################
'Declare Variables
Dim strStepsToReproduce
Dim strStepName
Dim intStep
Dim blnResult
Dim strTestName
CreateReportTemplate
'#######################################################

'#######################################################
'Initializations
intStep = 0
Environment("intStepNo") = 0
Environment("Component") = "Web Browser"
Environment("StepsToReproduce") = ""
'#######################################################

'#######################################################
'Initial Setup

'Set object for MobiDevice
Set objMobiDevice = MobiDevice("Web Browser")
Set objMobiWebButton  = MobiDevice("Web Browser").MobiWebButton("btnTheButton")
strURL =  "http://qa-content.mobilelabsinc.net/ml.html"

If Not  objMobiWebButton.Exist(3) Then
		'Open URL for testing
	OpenURL strURL , objMobiWebButton  , 3
End If

deviceScale = objMobiDevice.GetROProperty("viewerscale")

'Change device scale to 100 for verifying SetGlobalOffSet method
objMobiDevice.Scale 100
wait 3

' Step 116   Execute SetGlobalOffset method with X,Y as 30,50
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetGlobalOffset method with X,Y as (30,50) on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetGlobalOffset method on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Execute SetGlobalOffset method should sets an offset for X and Y"
strResult = VerifySetGlobalOffset(objMobiWebButton,30,50)
'###############################################################

' Step 116   Execute SetGlobalOffset method with with X,Y as 50,30
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetGlobalOffset method with X,Y as (50,30) on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetGlobalOffset method on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Execute SetGlobalOffset method should sets an offset for X and Y"
strResult = VerifySetGlobalOffset(objMobiWebButton,50,30)
'###############################################################

' Step 116   Execute SetGlobalOffset method with with X,Y as 80,80
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetGlobalOffset method with X,Y as (80,80) on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetGlobalOffset method on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Execute SetGlobalOffset method should sets an offset for X and Y"
strResult = VerifySetGlobalOffset(objMobiWebButton,80,80)
'###############################################################

' Step 116   Execute SetGlobalOffset method with with X,Y as -50,-50
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetGlobalOffset method with X,Y as (-50,-50) on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetGlobalOffset method on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Execute SetGlobalOffset method should sets an offset for X and Y"
strResult = VerifySetGlobalOffset(objMobiWebButton,-50,-50)
'###############################################################


'Change device scale back to original.
objMobiDevice.Scale Cint(deviceScale)
wait 3

Set ObjToVerify = MobiDevice("Web Browser").MobiWebLink("lnkMobileLabs")
Set ObjTest = MobiDevice("Web Browser").MobiWebView("WebView").MobiWebLink("Customer Login")
'Set ObjBack_Button = MobiDevice("Web Browser").MobiButton("btnBack_TB")
If MobiDevice("Web Browser").GetROProperty("nativeautomation")=True Then
	Set ObjBack_Button = MobiDevice("name:=Trust Browser").MobiButton("Visible:=True","index:=0")
Else 
	Set ObjBack_Button = MobiDevice("name:=Trust Browser").MobiButton("Visible:=True","index:=1")
End If




' Step 116   Verify back functionality on TrustBrowser & preserve history of visited pages
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Verify back functionality on TrustBrowser & preserve history of visited pages"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute back functionality for TrustBrowser." & VBNewLine
Environment("ExpectedResult") = "Back functioanlity for TrustBrowser should work & it should preserve the history of visited page"
strResult = VerifyBackTrustBrowser(ObjToVerify,ObjTest,ObjBack_Button)

' Step 116   Execute Rotate method with eLANDSCAPELEFT value
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Rotate method with eLANDSCAPELEFT value on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Rotate method with eLANDSCAPELEFT value on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Execute Rotate method with eLANDSCAPELEFT value should change the orientation accordingly"
strResult = VerifyRotate(objMobiDevice,eLANDSCAPELEFT)
'###############################################################


' Step 116   Execute Rotate method with eLANDSCAPERIGHT value
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Rotate method with eLANDSCAPERIGHT value on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Rotate method with eLANDSCAPERIGHT value on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Execute Rotate method with eLANDSCAPERIGHT value should change the orientation accordingly"
strResult = VerifyRotate(objMobiDevice,eLANDSCAPERIGHT)
'###############################################################

' Step 116   Execute Rotate method with ePORTRAIT value
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Rotate method with ePORTRAIT value on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Rotate method with ePORTRAIT value on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Execute Rotate method with ePORTRAIT value should change the orientation accordingly"
strResult = VerifyRotate(objMobiDevice,ePORTRAIT)
'###############################################################

' Step 116   Execute Rotate method with Blank/Invalid value
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Rotate method with Blank/Invalid value on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Rotate method with Blank/Invalid value on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Execute Rotate method with Blank/Invalid value should throw an error message"
strResult = VerifyRotate(objMobiDevice,"")
'###############################################################

EndTestIteration()

