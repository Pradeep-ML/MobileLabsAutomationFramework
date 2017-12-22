'##########################################################################################################
' Objective: Login to the PhoneLookup app and in the process test MobiDropdown
' Test Description: Execute all methods for both MobiDropdown's of Search and Controls screen
'##########################################################################################################

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
intSubStep = 0

'#######################################################
'Create an html report template
CreateReportTemplate()


' Step1: Navigate to Search screen
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & ": " &_
"Navigate to Search screen" & VBNewLine
Environment("ExpectedResult") = "Search screen should be displayed"

'Set object for list
Set objList=MobiDevice("Phone Lookup").MobiList("List")

'Set object for Dropdown control 
Set objMobiDropDown = MobiDevice("Phone Lookup").MobiDropdown("Dropdown")

'Call navigate to screen function 
strResult  = NavigateScreenOnPhoneLookupNative( "search"  , objMobiDropDown , "" ,objList)

'*********************************************************************************************************************
' Step 2: Execute CaptureBitmap with .png format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap on MobiDropdown with .png format."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Image should get captured in .png format."
strResult = VerifyCaptureBitmap(objMobiDropDown , "png")

' Step 3: Execute CaptureBitmap with .bmp format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap on MobiDropdown with .bmp format."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Image should get captured in .bmp format."
strResult = VerifyCaptureBitmap(objMobiDropDown , "bmp")

' Step 4: Execute CaptureBitmap to override an image with .png format
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap on MobiDropdown to override an image with  .png  format."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Proper error message should be thrown."
strResult = VerifyCaptureBitmap(objMobiDropDown , "override_png")

' Step 5: Execute CaptureBitmap to override an image with .bmp format
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap on MobiDropdown to override an image with  .bmp  format."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Proper error message should be thrown."
strResult = VerifyCaptureBitmap(objMobiDropDown , "override_bmp")

' Step 6: Execute CheckProperty when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CheckProperty on MobiDropdown when object is visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on MobiDropdown when object is visile." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should wait for the property to attain a value and return True"
strResult = VerifyCheckProperty(objMobiDropDown , "visible" , True , 2000 , True)

'Navigate to other screen where the dropdown control is not visible
MobiDevice("Phone Lookup").MobiButton("Search").Click
wait 2


' Step 7: Execute CheckProperty when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CheckProperty on MobiDropdown when object is not visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on MobiDropdown when object is not visile." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should wait for the property to attain a value and return False"
strResult = VerifyCheckProperty(objMobiDropDown, "visible",True, 15000, False)

'Navigating back to the screen with dropdown control
MobiDevice("Phone Lookup").ButtonPress eBACK
wait 2

' Step 8:  Execute Click  with boundary coordinates at Top-Left corner
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Top-Left corner on MobiDropdown."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDropDown ,"withboundarycoordsTopLeft")
If  strResult Then
 MobiDevice("Phone Lookup").ButtonPress eBACK
	'objMobiDropDown.Click
	wait 2
End If
' Step 9:  Execute Click  with boundary coordinates at Top-Right corner
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Top-Right corner on MobiDropdown."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDropDown,"withboundarycoordsTopRight")
If  strResult Then
MobiDevice("Phone Lookup").ButtonPress eBACK
	'objMobiDropDown.Click
	wait 2
End If
' Step 10:  Execute Click  with boundary coordinates at Bottom-Left corner
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Bottom-Left corner on MobiDropdown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDropDown,"withboundarycoordsBottomLeft")
If  strResult Then
MobiDevice("Phone Lookup").ButtonPress eBACK
'	objMobiDropDown.Click
	wait 2
End If

' Step 11:  Execute Click  with boundary coordinates at Bottom-Right corner
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Bottom-Right corner on MobiDropdown."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDropDown,"withboundarycoordsBottomRight")
If  strResult Then
MobiDevice("Phone Lookup").ButtonPress eBACK
'	objMobiDropDown.Click
	wait 2
End If

' Step 12: Execute Click without co-ordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click on MobiDropdown  without co-ordinates."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDropDown, "withoutcoords")
'Bringing the dropdown control to base state
If  strResult Then
MobiDevice("Phone Lookup").ButtonPress eBACK
'	objMobiDropDown.Click
	wait 2
End If

' Step 13: Execute Click with random co-ordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click on MobiDropdown with random co-ordinates."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."

strResult = VerifyClick(objMobiDropDown, "withrandomcoords")
'Bringing the dropdown control to base state
If  strResult Then
MobiDevice("Phone Lookup").ButtonPress eBACK
'	objMobiDropDown.Click
	wait 2
End If


' Step 14: Execute Click with x co-ordinate
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click on MobiDropdown with x co-ordinates."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDropDown, "withxvalue")
'Bringing the dropdown control to base state
If  strResult Then
MobiDevice("Phone Lookup").ButtonPress eBACK
'	objMobiDropDown.Click
	wait 2
End If

' Step 15: Execute Click with y co-ordinate
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click on MobiDropdown with y co-ordinates."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDropDown, "withyvalue")
'Bringing the dropdown control to base state
If  strResult Then
MobiDevice("Phone Lookup").ButtonPress eBACK
'	objMobiDropDown.Click
	wait 2
End If

' Step 16: Execute Click with valid co-ordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click on MobiDropdown with valid co-ordinates."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDropDown, "withvalidvalue")
'Bringing the dropdown control to base state
If  strResult Then
MobiDevice("Phone Lookup").ButtonPress eBACK
	
'	objMobiDropDown.Click
	wait 2
End If


' Step 17:  Execute  ChildObjects recursively
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "ChildObjects : Execute ChildObjects on MobiDropdown recursively"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ChildObjects on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "ChildObjects should return the count of children (if any)."
blnFlag = VerifyChildObjects(objMobiDropDown , "recursive" , 1)

' Step 18:  Execute  ChildObjects nonrecusrively
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "ChildObjects : Execute ChildObjects on MobiDropdown non-recursively"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ChildObjects on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "ChildObjects should return the count of children (if any)."
blnFlag = VerifyChildObjects(objMobiDropDown , "nonrecursive" , 1)


'Step 18 : Execute GetROProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetROproperty on MobiDropdown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetROProperty on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "GetROProperty should get the correct run-time value for a property."

arrROProp = Array ("accessibilitylabel","nativeclass")
arrROPropVal = Array("searchSpinner","android.widget.Spinner")
strResult = VerifyGetROProperty(objMobiDropDown ,  arrROProp , arrROPropVal)

'Step 19: Execute GetTOProperties
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOproperties on MobiDropdown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperties on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "GetTOProperties should get all properties for an object that are used for description."
arrTOProp = Array("visible", "enabled")
strResult = VerifyGetTOProperties(objMobiDropDown, arrTOProp)

'Step 20 : Execute GetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOproperty on MobiDropdown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperty on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "GetTOProperty should return the correct value for the test object property."
arrTOProp = Array("visible" , "enabled")
arrTOPropVal = Array (True, True)
strResult = VerifyGetTOProperty(objMobiDropDown, arrTOProp, arrTOPropVal)

'Step 21 : Execute GetVisibleText method with coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText with coordinates on MobiDropdown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute GetVisibleText on MobiDropdown with coordinates." & VBNewLine
Environment("ExpectedResult") = "GetVisibleText should return correct text after OCRing."
strResult = VerifyGetVisibleText(objMobiDropDown, True)

'Step 22 : Execute GetVisibleText method without coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText without coordinates on MobiDropdown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute GetVisibleText on MobiDropdown without coordinates." & VBNewLine
Environment("ExpectedResult") = "GetVisibleText should return correct text after OCRing."
strResult =VerifyGetVisibleText(objMobiDropDown, False)

'Step 23 : Execute RefreshObject
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute RefreshObject on MobiDropdown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "RefreshObject re-identifies the object in the application"
strResult = VerifyRefreshObject(objMobiDropDown)

'Step 24 : Execute 'ToString
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ToString on MobiDropdown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute TOString on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "TOString should return the object type and class."
strResult = VerifyTOString(objMobiDropDown)

'Step 32: Execute RowCount without any input
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute RowCount on MobiDropdown without any input."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute RowCount  on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Rowcount returns count of rows in dropdown"
'objMobiDropdown.Click
Set objList = MobiDevice("Phone Lookup").MobiList("List") 
strResult = VerifyRowCountNative(objMobiDropdown , "LG" , 8 , objList)
If  strResult Then
	MobiDevice("Phone Lookup").ButtonPress eBACK
	wait 1
End If

'' Select with index support for Android 6 & above. So 
deviceOSVersion = MobiDevice("Phone Lookup").GetROProperty("osversion")
val= Split(deviceOSVersion,".")
If val(0) > 5 Then
	
'Step 27: Execute GetItem with index as integer 
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetItem on MobiDropdown with index as integer."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetItem on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "GetItem should return item at specified index from dropdown."
Set objList = MobiDevice("Phone Lookup").MobiList("List")
strResult = VerifyGetItemNative(objMobiDropDown , 4 , "" , "Samsung" , "withindexonly" , objList)

If objList.Exist(2) Then
	MobiDevice("Phone Lookup").ButtonPress eBACK
End If

'Step 36: Execute Select using index
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Select on MobiDropdown with index."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute Select on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Select should set the value at specified index  in the dropdown."
Set objList=MobiDevice("Phone Lookup").MobiList("List")
Set objPassedobject= MobiDevice("Phone Lookup").MobiDropdown("Dropdown").MobiElement("Motorola")
wait 2
strResult = VerifySelectNative(objMobiDropDown , "selectindex" , 3  , "" , objList , objPassedobject)

'Step 37: Execute Select using hash value
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Select on MobiDropdown with hash value."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute Select on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Select should set the value at specified hash value in the dropdown."
Set objList=MobiDevice("Phone Lookup").MobiList("List")
Set objPassedobject= MobiDevice("Phone Lookup").MobiDropdown("Dropdown").MobiElement("RIM")
wait 2
strResult = VerifySelectNative(objMobiDropDown , "selecthashvalue" , "#5"  , "" , objList , objPassedobject)

End If 


'Step 34: Execute Select  with string
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Select on MobiDropdown with string case sensitive."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute Select on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Select should set the passed in text correctly."
Set objList=MobiDevice("Phone Lookup").MobiList("List")
'objList.Click
Set objPassedobject= MobiDevice("Phone Lookup").MobiDropdown("Dropdown").MobiElement("LG")
wait 2
strResult = VerifySelectNative(objMobiDropDown , "selectstring" , "LG" , "" , objList , objPassedobject)


'Step 42 : Execute SetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetTOProperty on MobiDropdown."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetTOProperty on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "SetTOProperty should set the value of the test object property."
arrTOProp = Array("visible" , "enabled")
strResult = VerifySetTOProperty(objMobiDropDown, arrTOProp)



' Step 25: Execute WaitProperty when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute WaitProperty on MobiDropdown when object is visible."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value and return True."
Set objMobiDropDown  = MobiDevice("Phone Lookup").MobiDropdown("Dropdown")
strResult = VerifyWaitProperty(objMobiDropDown , "visible" , True , 2000 , True)

'Step 17 : Execute Exist when object is visible
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist when object is visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Exist should return True."
strResult = VerifyExist(objMobiDropDown, True, 5)

'Navigate to other screen where the dropdown control is not visible
MobiDevice("Phone Lookup").MobiButton("Search").Click
wait 2

'Step 17 : Execute Exist when object is not visible
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist when object is not visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "Exist should return False."
strResult = VerifyExist(objMobiDropDown, False, 10)


' Step 26: Execute WaitProperty when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute WaitProperty on MobiDropdown when object is not visible."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiDropdown." & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value and return False"
'Set objMobiDropDown  = MobiDevice("Phone Lookup").MobiDropdown("HTC")
strResult = VerifyWaitProperty(objMobiDropDown , "visible", True , 10000, False)

'Navigating back to the screen with dropdown control
MobiDevice("Phone Lookup").ButtonPress eBACK
wait 1

'*********************************************************************************************************************
' Step 43: Navigate to Spinner  screen
'###########################################################

'Set object for Controls screen Spinner Dropdown 
Set objList = MobiDevice("Phone Lookup").MobiList("List")
Set objMobiDropDown  = MobiDevice("Phone Lookup").MobiDropdown("Dropdown_2")

'Call navigate to screen function 
 NavigateScreenOnPhoneLookupNative "controls"  , objMobiDropDown , "Spinner" , objList
wait 3

'*********************************************************************************************************************

'Step 51: Execute Select  with string 
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Select on MobiDropdown(spinner) with string case sensitive."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute Select on MobiDropdown(spinner)." & VBNewLine
Environment("ExpectedResult") = "Select should set the passed in text correctly."
Set objList = MobiDevice("Phone Lookup").MobiList("List")
Set objPassedobject = MobiDevice("Phone Lookup").MobiDropdown("Dropdown_2").MobiElement("four")
strResult = VerifySelectNative(objMobiDropDown , "selectstring" , "four" , "" , objList , objPassedObject)

'' Select with index support for Android 6 & above. So 
deviceOSVersion = MobiDevice("Phone Lookup").GetROProperty("osversion")
val= Split(deviceOSVersion,".")
If val(0) > 5 Then

'Step 53: Execute Select using index on spinner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Select on MobiDropdown(spinner) with index."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute Select on MobiDropdown(spinner)." & VBNewLine
Environment("ExpectedResult") = "Select should set the value at specified index in the dropdown."
Set objList=MobiDevice("Phone Lookup").MobiList("List")
Set objPassedobject= MobiDevice("Phone Lookup").MobiDropdown("Dropdown_2").MobiElement("one")
strResult = VerifySelectNative(objMobiDropDown , "selectindex" , 0  , "" , objList , objPassedObject)

'Step 54: Execute Select using hash value on spinner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Select on MobiDropdown(spinner) with hash value."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute Select on MobiDropdown(spinner)." & VBNewLine
Environment("ExpectedResult") = "Select should set the value at specified hash value in the dropdown."
Set objList=MobiDevice("Phone Lookup").MobiList("List")
Set objPassedobject= MobiDevice("Phone Lookup").MobiDropdown("Dropdown_2").MobiElement("four")
strResult = VerifySelectNative(objMobiDropDown , "selecthashvalue" , "#3"  , "" , objList , objPassedObject)

End If


''Step 59 : Execute GetVisibleText method with coordinates on spinner
''##########################################################
'intStep = intStep+1
'Environment("StepName") = "Step" & intStep
'Environment("Description") = "Execute GetVisibleText with coordinates on MobiDropdown(spinner)"
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
'"Execute GetVisibleText on MobiDropdown(spinner) with coordinates." & VBNewLine
'Environment("ExpectedResult") = "GetVisibleText should return correct text after OCRing."
'objList.Click
'strResult = VerifyGetVisibleText(objMobiDropDown, True)
'
''Step 60 : Execute GetVisibleText method without coordinates on spinner
''##########################################################
'intStep = intStep+1
'Environment("StepName") = "Step" & intStep
'Environment("Description") = "Execute GetVisibleText without coordinates on MobiDropdown(spinner)"
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
'"Execute GetVisibleText on MobiDropdown(spinner) without coordinates." & VBNewLine
'Environment("ExpectedResult") = "GetVisibleText should return correct text after OCRing."
'objList.Click
'strResult = VerifyGetVisibleText(objMobiDropDown, False)
'
'*********************************************************************************************************************
 LogOut
 
 'Hide device keypad in case of nativeAutomation.
If MobiDevice("Phone Lookup").MobiElement("Keypad").Exist(3) Then
	objMobiDevice.ButtonPress eBACK
wait 2
End If
 
'End test iteration
EndTestIteration()






















































