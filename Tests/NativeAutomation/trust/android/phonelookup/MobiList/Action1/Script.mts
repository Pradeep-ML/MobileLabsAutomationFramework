
'##########################################################################################################
' Objective: Login to the PhoneLookup app and test MobiList
' Test Description: Execute all MobiList methods on Controls screen
'#######################################################
'Declare Variables
Dim strStepsToReproduce
Dim strStepName
Dim intStep
Dim blnResult
Dim strTestName
'#######################################################

'#######################################################
'Initializations
intStep = 0
Environment("Component") = "PhoneLookup_ObjectBased"
Environment("StepsToReproduce") = ""
'#######################################################

' Step: Navigate to Controls screen
'Expected Result: Controls screen should be displayed
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & ": " &_
"Navigate to Search screen" & VBNewLine
Environment("ExpectedResult") = "Controls screen should be displayed"

'Call function to createreporttemplare
CreateReportTemplate()

'Set object for List
Set objMobiList = MobiDevice("Phone Lookup").MobiList("List")
'Call function to navigate to Controls screen
StrResult = NavigateScreenOnPhoneLookup("Controls"  , objMobiList , "")


'*********************************************************************************************************************
' Step1:Execute CaptureBitmap with .png file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with .png file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on mobilist." & VBNewLine
Environment("ExpectedResult") = "CaptureBitmap should capture the screenshot and save the png file to the defined location."
strResult =  VerifyCaptureBitmap(objMobiList , "png")

' Step2:Execute CaptureBitmap with .bmp file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with  .bmp file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on mobilist ." & VBNewLine
Environment("ExpectedResult") = "CaptureBitmap should capture the screenshot and save the bmp file to the defined location."
strResult =  VerifyCaptureBitmap(objMobiList , "bmp")

' Step3:Execute CaptureBitmap with .override.bmp file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with override .png file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on mobilist." & VBNewLine
Environment("ExpectedResult") = "CaptureBitmap should throw an error messge for override messagefor .bmp file."
strResult =  VerifyCaptureBitmap(objMobiList , "override_bmp")

' Step4:Execute CaptureBitmap with .override.png file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with .png file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on mobilist." & VBNewLine
Environment("ExpectedResult") =  "CaptureBitmap should throw an error messge for override message for .png  file."
strResult =  VerifyCaptureBitmap(objMobiList , "override_png")

' Step 5 Execute CheckProperty  when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute check property when object is visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on mobilist ." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should return True."
strResult = VerifyCheckProperty(objMobiList, "visible" ,True , 5000, True)

' Step7:  Execute Exist  when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist method when object is  visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on .mobilist" & VBNewLine
Environment("ExpectedResult") = "Exist should work correctly."
strResult = VerifyExist(objMobiList, True, 5)

' Step9:  Execute GetTOProperties 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperties method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperties on mobilist ." & VBNewLine
Environment("ExpectedResult") = "GetTOProperties should get all properties for an object that are used for description."
arrProps = Array("micclass","visible")
strResult = VerifyGetTOProperties(objMobiList, arrProps)


' Step10  Execute GetROProperty 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetROProperty method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetROProperty on mobilist" & VBNewLine
Environment("ExpectedResult") = "GetROProperty should get the correct run-time value for a property."
arrProps = Array("enabled","nativeclass")
arrvalue= Array (True,"android.widget.ListView")
strResult =VerifyGetROProperty(objMobiList, arrProps, arrvalue)

' Step11:  Execute GetTOProperty 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperty method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperty on mobilist." & VBNewLine
Environment("ExpectedResult") = "GetTOProperty should return the correct value for the test object property."
arrProps = Array("visible")
arrvalue= Array ("True")
strResult =VerifyGetTOProperty(objMobiList, arrProps, arrvalue)

' Step12:  Execute ToString 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ToString method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ToString on mobilist." & VBNewLine
Environment("ExpectedResult") = "ToString should return the object type and class."
strResult = VerifyToString(objMobiList)

' Step13  Execute WaitProperty  when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Wait property when object is visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on mobilist" & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value"
strResult = VerifyWaitProperty(objMobiList, "visible", True , 5000 , True)

 'Step 7:  Execute  ChildObjects recursively
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute childobject method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on mobilist." & VBNewLine
Environment("ExpectedResult") = "Return child object recursively in the application"
blnFlag = VerifyChildObjects(objMobiList, "recursive" , 11)

 'Step 7:  Execute  ChildObjects non recursively
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute childobject method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on mobilist." & VBNewLine
Environment("ExpectedResult") = "Return child object non recursively in the application"
blnFlag = VerifyChildObjects(objMobiList, "nonrecursive" , 11)

 'Step 13:  Execute Click  with boundary coordinates at Top-Left corner
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Top-Left corner on MobiList."
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiList ,"withboundarycoordsTopLeft")
GoToScreen "Controls"
'
'' Step 13:  Execute Click  with boundary coordinates at Top-Right corner
''#######################################################
'
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Top-Right corner on MobiList."
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiList,"withboundarycoordsTopRight")
GoToScreen "Controls"
'
'' Step 13:  Execute Click  with boundary coordinates at Bottom-Left corner
''#######################################################
'
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Bottom-Left corner on MobiList"
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiList,"withboundarycoordsBottomLeft")
GoToScreen "Controls"
'
' Step 13:  Execute Click  with boundary coordinates at Bottom-Right corner
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Bottom-Right corner on MobiDropdown."
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiList,"withboundarycoordsBottomRight")
GoToScreen "Controls"


'19'Execute Click   Without coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method Without coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on mobilist." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiList, "withoutcoords")
GoToScreen "Controls"

'21'Execute Click with  x coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with x coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on mobilist." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiList, "withxvalue")
GoToScreen "Controls"


'22'Execute Click with  y coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with y coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on mobilist." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiList, "withyvalue")
GoToScreen "Controls"

'23'Execute Click with  Valid X & Y coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with Valis x & y coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on mobilist." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiList, "withvalidvalue")
GoToScreen "Controls"

'24'Execute Click with  Random coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with Random coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on mobilist." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiList, "withrandomcoords")
GoToScreen "Controls"

'Step 30 : Execute RowCount  With Blank Value
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute RowCount  With Blank Value"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RowCount  on MobiList." & VBNewLine
Environment("ExpectedResult") = "RowCount represents number of rows contained in a list"
strResult = VerifyRowCountNative(objMobiList ,"zoomcontrols", 31 ,objMobiList)

' Scroll To Top
ScrollToTop objMobiList , "AbsoluteLayout"
wait 4
'Index selections (Select with a number) will only work on Android versions >= 6.0/API 23.
deviceOSVersion = MobiDevice("Phone Lookup").GetROProperty("osversion")
val= Split(deviceOSVersion,".")

If val(0) > 5 Then
	'Step 26 : Execute GetItem With Index 
	'##########################################################
	intStep = intStep+1
	Environment("StepName") = "Step" & intStep
	Environment("Description") = "Execute Getitem With Index"
	Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
	"Execute GetItem on MobiList." & VBNewLine
	Environment("ExpectedResult") = "GetItem should get the correct run-time value for the specifed index location."
	strResult = VerifyGetItem(objMobiList, 8,,"GridView" , "withindexonly")
	
	'Step 36: Execute 'Select  Item as Index
	'##########################################################
	intStep = intStep+1
	Environment("StepName") = "Step" & intStep
	Environment("Description") = "Execute 'Select  with Item as Index"
	Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
	"Execute Select on MobiList." & VBNewLine
	Environment("ExpectedResult") = "Select should select the item correctly."
	'Set the object that appear after select opeartion
	Set objAfterSelection = MobiDevice("Phone Lookup").MobiButton("Changethedate")
	strResult = VerifySelect(objMobiList ,"selectindex", 5 , objAfterSelection)
	GoToScreen "Controls"
End If 

'Step 35: Execute 'Select  with Item as String Case Sensitive
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute 'Select  with Item as String Case Sensitive"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Select on MobiList." & VBNewLine
Environment("ExpectedResult") = "Select should select the item correctly."
'Set the object that appear after select opeartion
Set objAfterSelection = MobiDevice("Phone Lookup").MobiButton("Changethedate")
strResult = VerifySelect(objMobiList ,"selectstring", "DatePicker" , objAfterSelection)
GoToScreen "Controls"

' Step16  Execute RefreshObject 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Refresh method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on mobilist." & VBNewLine
Environment("ExpectedResult") = "RefreshObject re-identifies the object in the application"
strResult = VerifyRefreshObject(objMobiList)

Set objMobiList=MobiDevice("Phone Lookup").MobiList("List")
If Not MobiDevice("Phone Lookup").MobiElement("AbsoluteLayout").Exist Then
ScrollToTop objMobiList , "AbsoluteLayout"
End If

'Set object for verification of Swipe eUP & Swipe eDown
Set obj_up =MobiDevice("Phone Lookup").MobiElement("CheckBox") 
Set obj_down = MobiDevice("Phone Lookup").MobiElement("RelativeLayout") 
wait 2

' Step 40:  Execute Swipe down
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe edown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiList." & VBNewLine
Environment("ExpectedResult") = "Simulates a swipe edown gesture on a MobiList"
strResult = VerifySwipe(objMobiList ,eDOWN ,,,,obj_down)

' Step 41:  Execute Swipe up
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe up"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiList." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe up gesture on a MobiList"
strResult = VerifySwipe(objMobiList , eUP , , , , obj_up)

'' Step 50:  Execute Swipe with directions as edown and velocity eFast
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as edown and velocity eFast"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiList." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi List with directions as edown and velocity eFast "
strResult = VerifySwipe(objMobiList , eDOWN , eFAST,,,obj_down)


' Step 43:  Execute  Swipe with directions as eup and velocity eSlow
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiList." & VBNewLine
Environment("Description") = "Execut swipe with directions as eup and velocity eSlow"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi List with directions as eup and velocity eSlow"
strResult = VerifySwipe(objMobiList  , eUP ,eSLOW,,,obj_up)

'' Step 50:  Execute Swipe with directions as edown and velocity eMedium and starting percentage as 40(0-99)
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as edown and velocity eMedium and starting percentage as 40(0-99)"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiList." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi List with directions as edown and velocity eMedium and starting percentage as 40(0-99) "
strResult = VerifySwipe(objMobiList , eDOWN , eMEDIUM,40,,obj_down)


' Step 45:  Execute Swipe with directions as eup and velocity eFast and starting percentage as 40(0-99)
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MsobiList." & VBNewLine
Environment("Description") = "Execut swipe with directions as eup and velocity eFast and starting percentage as 40(0-99)"
Environment("ExpectedResult") = "Simulates a gesture on a MobiList with directions as eup and velocity eFast and starting percentage as 40(0-99)"
strResult = VerifySwipe(objMobiList  ,eUP ,eFAST,40,,obj_up)

'' Step 48:  Execute Swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70 
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70 "
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiList." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi List with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70  "
strResult = VerifySwipe(objMobiList , eDOWN , eSLOW ,30 ,70 ,obj_down)

'
' Step 47:  Execute  Swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70 
'###########################30############################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiList." & VBNewLine
Environment("Description") = "Execut swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70 "
Environment("ExpectedResult") = "Simulates a gesture on a Mobi List with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70 "
strResult = VerifySwipe(objMobiList  ,eUP ,eMEDIUM , 30 ,70 ,obj_up)

' Step 72 :Execute SetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetToProperty"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetTOProperty on MobiList." & VBNewLine
Environment("ExpectedResult") = "SetTOProperty should set the value of the test object property."
arrProps = Array("visible")
strResult = VerifySetTOProperty(objMobiList, arrProps)

'navigate to login screen
LogOut

' Step 6 Execute CheckProperty  when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute check property when object is not  visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on mobilist." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should return False"
strResult = VerifyCheckProperty(objMobiList, "visible" ,True , 15000, False)

' Step8:  Execute Exist  when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist method when object is not  visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on mobilist." & VBNewLine
Environment("ExpectedResult") = "Exist should work correctly and return false."
strResult =VerifyExist(objMobiList, False,15)

' Step14:  Execute WaitProperty  when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute wait property when object is not visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on mobilist" & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value and should return False"
strResult = VerifyWaitProperty(objMobiList, "visible", True, 5000, False)

'******************************************************************************************************************************************************************

'Call function to end test iteration
EndTestIteration()






