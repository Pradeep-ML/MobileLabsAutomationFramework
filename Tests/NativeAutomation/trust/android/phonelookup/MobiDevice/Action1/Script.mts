'##########################################################################################################
' Objective: Login to the PhoneLookup app and test MobiDevice
' Test Description: Execute all MobiDevice methods on Controls screen
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

'Set object for MobiDevice 
Set objMobiDevice = MobiDevice("Phone Lookup")

'Create an html report template
CreateReportTemplate()
'#######################################################

' Step1: Navigate to Controls screen
'Expected Result: Controls screen should be displayed
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & ": " &_
"Navigate to Search screen" & VBNewLine
Environment("ExpectedResult") = "Controls screen should be displayed"
'Set object for MobiDevice 
Set objMobiDevice = MobiDevice("Phone Lookup")
'Initial Setup
Flag_Search = NavigateScreenOnPhoneLookup("Controls"  , objMobiDevice , "")

'#######################################################

' Step2:  Execute CaptureBitmap with .png format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap with .png format" & VBNewLine
Environment("Description") = "CaptureBitMap : Execute method to capture image in .png format"
Environment("ExpectedResult") = "Image should get captured in .png format"
strResult = VerifyCaptureBitmap(objMobiDevice , "png")

' Step3:  Execute CaptureBitmap with .bmp format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap with .bmp format" & VBNewLine
Environment("Description") = "CaptureBitMap : Execute method to capture image in .bmp format"
Environment("ExpectedResult") = "Image should get captured in .bmp format"
strResult = VerifyCaptureBitmap(objMobiDevice , "bmp")

' Step 4:  Execute CaptureBitmap to override an .bmp image
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap  to override an .bmp image" & VBNewLine
Environment("Description") = "CaptureBitMap : Execute method  to override an .bmp image"
Environment("ExpectedResult") = "Override error message should be thrown"
strResult = VerifyCaptureBitmap(objMobiDevice , "override_bmp")

' Step 5:  Execute CaptureBitmap to override an .png image
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap  to override an .png image" & VBNewLine
Environment("Description") = "CaptureBitMap : Execute method  to override an .png image"
Environment("ExpectedResult") =  "Override error message should be thrown"
strResult = VerifyCaptureBitmap(objMobiDevice , "override_png")

' Step 6:  Execute CheckProperty
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CheckProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should wait for the property to attain a value and report the result."
strResult =  VerifyCheckProperty(objMobiDevice, "name","Phone Lookup", 5000, True)

'Step 7: Execute ChildObjects recursively
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Childobjects method on MobiDevice recursively"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ChildObjects on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "ChildObjects should return the count of children recursively (if any)."
strResult = VerifyChildObjects(objMobiDevice,"recursive",14)

'Step 7: Execute ChildObjects non-recursively
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Childobjects method on MobiDevice non-recursively"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ChildObjects on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "ChildObjects should return the count of children non-recursively (if any)."
strResult = VerifyChildObjects(objMobiDevice,"nonrecursive",3)

'Step 8 : Execute Click with  Boundary coordinates at Top-Left corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with boundary co-ordinates at Top-Left corner"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withboundarycoordsTopLeft")
GoToScreen "Controls"


'Step 8 : Execute Click with  Boundary coordinates at Top-Right corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with boundary co-ordinates at Top-Right corner"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withboundarycoordsTopRight")
GoToScreen "Controls"


'Step 8 : Execute Click with  Boundary coordinates at Bottom-Left corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with boundary co-ordinates at Bottom-Left corner"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withboundarycoordsBottomLeft")
GoToScreen "Controls"


'Step 8 : Execute Click with  Boundary coordinates at Bottom-Right corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with boundary co-ordinates at Bottom-Right corner"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withboundarycoordsBottomRight")
GoToScreen "Controls"

'Step 9 : Execute Click with  Random coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Random coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with Random co-ordinates"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withrandomcoords")
GoToScreen "Controls"



'Step 11 : Execute Click without coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice without coordinates." & VBNewLine
Environment("Description") = "Click : Execute method without  co-ordinates"
Environment("ExpectedResult") = "Click should work correctly."
strResult =  VerifyClick(objMobiDevice, "withoutcoords")
GoToScreen "Controls"


'Step 13 : Execute Click  at only one co-ordinate (Only X)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with only X coordinate" & VBNewLine
Environment("Description") = "Click : Execute method with only X co-ordinate"
Environment("ExpectedResult") = "Click should work correctly."
strResult =  VerifyClick(objMobiDevice, "withxvalue")
GoToScreen "Controls"


'Step 14 : Execute Click  at only one co-ordinate (Only Y)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with only Y coordinate" & VBNewLine
Environment("Description") = "Click : Execute method with only Y co-ordinate"
Environment("ExpectedResult") = "Click should work correctly."
strResult =  VerifyClick(objMobiDevice, "withyvalue")
GoToScreen "Controls"

'Step 15 : Execute Click  at  any valid value
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice at  any valid value." & VBNewLine
Environment("Description") = "Click : Execute method with any valid co-ordinates"
Environment("ExpectedResult") = "Click should work correctly."
strResult =  VerifyClick(objMobiDevice, "withvalidvalue")
GoToScreen "Controls"


'Step 16 : Execute DblClick with  Boundary coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "DblClick : Execute method with boundary co-ordinates"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult = VerifyDblClick(objMobiDevice, "withboundarycoords")
GoToScreen "Controls"


'Step 17 : Execute DblClick with  Random coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice with Random coordinates." & VBNewLine
Environment("Description") = "DblClick : Execute method with Random co-ordinates"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult = VerifyDblClick(objMobiDevice, "withrandomcoords")
GoToScreen "Controls"


'Step 19 : Execute DblClick without coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice without coordinates." & VBNewLine
Environment("Description") = "DblClick : Execute method without  co-ordinates"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult =  VerifyDblClick(objMobiDevice, "withoutcoords")
GoToScreen "Controls"

'Step 21 : Execute DblClick  at only one co-ordinate (Only X)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice with only X coordinate" & VBNewLine
Environment("Description") = "DblClick : Execute method with only X co-ordinate"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult =  VerifyDblClick(objMobiDevice, "withonlyxcoord")
GoToScreen "Controls"


'Step 22 : Execute DblClick  at only one co-ordinate (Only Y)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice with only Y coordinate" & VBNewLine
Environment("Description") = "DblClick : Execute method with only Y co-ordinate"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult =  VerifyDblClick(objMobiDevice, "withonlyycoord")
GoToScreen "Controls"


'Step 23 : Execute DblClick  at  any valid value
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice at  any valid value." & VBNewLine
Environment("Description") = "DblClick : Execute method with any valid co-ordinates"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult =  VerifyDblClick(objMobiDevice, "withvalidvalues")
GoToScreen "Controls"


'Step 24: Execute Exist
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Exist should work correctly."
strResult = VerifyExist(objMobiDevice, True, 5)

'Step 25 : Execute GetROProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetROProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetROProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "GetROProperty should get the correct run-time value for a property."
arrProp = Array("name","nativeautomation")
arrpropval = Array("Phone Lookup","True")
strResult = VerifyGetROProperty(objMobiDevice, arrProp,arrpropval)

'Step 26: Execute GetTOProperties
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperties method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperties on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "GetTOProperties should get all properties for an object that are used for description."
arrProps = Array("name")
strResult = VerifyGetTOProperties(objMobiDevice, arrProps)

'Step 27:: Execute GetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "GetTOProperty should return the correct value for the test object property."
arrProp = Array("name")
arrPropVal = Array("Phone Lookup")
strResult =  VerifyGetTOProperty(objMobiDevice, arrProp, arrPropVal)

'Step 28: Execute GetTextLocation with text
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTextLocation method with text  on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetText:Location on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "GetTextLocation returns location of text."

strText = MobiDevice("Phone Lookup").MobiElement("DatePicker").GetVisibleText()
Wait 2
strResult = VerifyGetTextLocation(objMobiDevice , strText , True)

'Step 29: Execute GetTextLocation without  text
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTextLocation method without  text  on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetText:Location on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Proper error mesasge should be displayed."
strResult = VerifyGetTextLocation(objMobiDevice ,"" , False)

'Step 30: Execute GetVisibleText  without Co-ordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText method without  coordinates  on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetVisibleText without co-ordinates  on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "GetVisibleText returns visible text on object  passed"
strResult = VerifyGetVisibleText(objMobiDevice , False)

'Step 31 :Execute GetVisibleText  with Co-ordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText method with coordinates  on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetVisibleText with co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "GetVisibleText returns visible text on object  passed"
strResult =VerifyGetVisibleText(objMobiDevice , True)

'Step 32 :Execute LongClick  with valid lapse and without co-ordinates
'##########################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick  method with valid lapse and without coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapsewithoutcoords")
GoToScreen  "Controls"


'Step 33 :Execute LongClick  with valid lapse and with boundary coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with boundary coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapseboundarycoords")
GoToScreen  "Controls"


'Step 34 :Execute LongClick  with valid lapse and with random coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with random coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapserandomcoords")
GoToScreen  "Controls"



'Step 37 :Execute LongClick  with valid lapse and with valid coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with valid coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"withvalidlapsevalidvalue")
GoToScreen  "Controls"

'Step 38 :Execute LongClick  with valid lapse and with only x coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with only x coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapsexcoords")
GoToScreen  "Controls"


'Step 39 :Execute LongClick  with valid lapse and with only y coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with only y coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapseycoords")
GoToScreen  "Controls"


'Step 40 :Execute LongClick  with invalid lapse and without coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with invalid lapse and without coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"withinvalidlapsetime")
GoToScreen  "Controls"


'Step 41 : Execute Minimize when window is activated
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Minimize method on activated viewer window"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Minimize  on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Should Minimize the viewer window"
strResult =  VerifyMinimize(objMobiDevice )


'Step 43: Execute Restore
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Restore method on Mobidevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Restore  on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Restores the minimized window"
strResult = VerfiyRestore(objMobiDevice)

'Step 44: Execute RefreshObject
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute RefreshObject  method on Mobidevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "RefreshObject re-identifies the object in the application"
strResult = VerifyRefreshObject(objMobiDevice)

' Step 50:  Execute Swipe down
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe edown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a swipe edown gesture on a Mobi Device"
Set objControl = MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice ,eDOWN ,,,,objControl)
GoToScreen "Controls"

' Step 51:  Execute Swipe up
'#######################################################
'Scrolling the list to bottom
MobiDevice("Phone Lookup").MobiList("List").Scroll eBOTTOM
wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe up"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe up gesture on a Mobi Device"
Set objControl =MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice , eUP , , , , objControl)
GoToScreen "Controls"

' Step 52:  Execute Swipe with directions as edown and velocity eFast
''#######################################################
'Scrolling the list to top
MobiDevice("Phone Lookup").MobiList("List").Scroll  eTOP
wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as edown and velocity eFast"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Device with directions as edown and velocity eFast"
'Set objControl = MobiDevice("Phone Lookup").MobiElement("AbsoluteLayout")
Set objControl = MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice , eDOWN , eFAST  , , ,objControl)
GoToScreen "Controls"

' Step 53:  Execute  Swipe with directions as eup and velocity eSlow
'#######################################################
'Scrolling the list to bottom
MobiDevice("Phone Lookup").MobiList("List").Scroll  eBOTTOM
wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("Description") = "Execut swipe with directions as eup and velocity eSlow"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Device with directions as eup and velocity eSlow"
Set objControl =MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice  , eUP ,eSLOW ,  , ,objControl)
GoToScreen "Controls"
'If Not ( lcase (objMobiDevice.GetROProperty("devicetype")) = lcase("GT-P5100") or lcase (objMobiDevice.GetROProperty("devicetype")) = lcase("GT-P6200") )Then
'	objMobiDevice.ButtonPress eBACK
'	wait 2
'End If

' Step 54:  Execute Swipe with directions as edown and velocity eMedium and starting percentage as 40(0-99)
''#######################################################
'Scrolling the list to top
MobiDevice("Phone Lookup").MobiList("List").Scroll  eTOP
wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as edown and velocity eMedium and starting percentage as 40(0-99)"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Device with directions as edown and velocity eMedium and starting percentage as 40(0-99) "
'Set objControl = MobiDevice("Phone Lookup").MobiElement("AbsoluteLayout")
Set objControl = MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice , eDOWN , eMEDIUM  , 40 , ,objControl)
GoToScreen "Controls"

' Step 55:  Execute Swipe with directions as eup and velocity eFast and starting percentage as 40(0-99)
'#######################################################
'Scrolling the list to bottom
MobiDevice("Phone Lookup").MobiList("List").Scroll  eBOTTOM
wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("Description") = "Execut swipe with directions as eup and velocity eFast and starting percentage as 40(0-99)"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Device with directions as eup and velocity eFast and starting percentage as 40(0-99)"
Set objControl =MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice  , eUP ,eFAST , 40  , ,objControl)
GoToScreen "Controls"
'If Not ( lcase (objMobiDevice.GetROProperty("devicetype")) = lcase("GT-P5100") or lcase (objMobiDevice.GetROProperty("devicetype")) = lcase("GT-P6200") )Then
'	objMobiDevice.ButtonPress eBACK
'	wait 2
'End If

' Step 56:  Execute Swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70
''#######################################################
'Scrolling the list to top
MobiDevice("Phone Lookup").MobiList("List").Scroll  eTOP
wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Device with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70 "
'Set objControl = MobiDevice("Phone Lookup").MobiElement("AbsoluteLayout")
Set objControl = MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice , eDOWN , eSLOW  ,30,70,objControl)
GoToScreen "Controls"

' Step 57:  Execute Swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70 
'#######################################################
'Scrolling the list to bottom
MobiDevice("Phone Lookup").MobiList("List").Scroll eBOTTOM
wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("Description") = "Execut swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Device with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70"
Set objControl =MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice  , eUP ,eMEDIUM ,30,70,objControl)
GoToScreen "Controls"
wait 1
MobiDevice("Phone Lookup").MobiList("List").Scroll eTOP
wait 1
'Launch Horizontal scroll view 
MobiDevice("Phone Lookup").MobiList("List").Select "HorizontalScrollView"
wait 1
Set obj_RightLeft = MobiDevice("Phone Lookup").MobiElement("ScrollView_Left")


' Step 82:  Execute Swipe eRight
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eRight"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe eRight gesture on a MobiDevice"
strResult = VerifySwipe(objMobiDevice  , eRIGHT,  , , ,obj_RightLeft)


' Step 83:  Execute Swipe eLeft
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eLeft"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe eLeft  gesture on a MobiDevice"
strResult = VerifySwipe(objMobiDevice , eLEFT  , , , , obj_RightLeft)

'
'' Step 84:  Execute Swipe with directions as eRight and velocity eFast
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as eRight and velocity eFast"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on MobiDevice with directions as eRight and velocity eFast "
strResult = VerifySwipe(objMobiDevice , eRIGHT , eFAST , , ,obj_RightLeft)


' Step 85:  Execute  Swipe with directions as eLeft and velocity eSlow
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("Description") = "Execut swipe with directions as eLeft and velocity eSlow"
Environment("ExpectedResult") = "Simulates a gesture on a MobiDevice with directions as eLeft and velocity eSlow"
strResult = VerifySwipe(objMobiDevice, eLEFT ,eSLOW ,  ,,obj_RightLeft)


'' Step 86:  Execute Swipe  with directions as eRight and velocity eMedium and starting percentage as 30(0-99)
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as eRight and velocity eMedium and starting percentage as 30(0-99)"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on MobiDevice with directions as eRight and velocity eMedium and starting percentage as 30(0-99) "
strResult = VerifySwipe(objMobiDevice , eRIGHT , eMEDIUM ,30 , ,obj_RightLeft)


' Step 87:  Execute  Swipe with directions as eLeft and velocity eFast and starting percentage as 30(0-99)
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("Description") = "Execut swipe with directions as eLeft and velocity eFast and starting percentage as 30(0-99)"
Environment("ExpectedResult") = "Simulates a gesture on a MobiDevice with directions as eLeft and velocity eFast and starting percentage as 30(0-99)"
strResult = VerifySwipe(objMobiDevice  ,eLEFT ,eFAST, 30, ,obj_RightLeft)


'' Step 88:  Execute Swipe  with directions as eRight and velocity eSlow and starting percentage as 15 and ending percentage as 85
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as eRight and velocity eSlow and starting percentage as 15 and ending percentage as 85"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on MobiDevice with directions as eRight and velocity eSlow and starting percentage as 15 and ending percentage as 85 "
strResult = VerifySwipe(objMobiDevice , eRIGHT, eSLOW ,15,85,obj_RightLeft)


' Step 89:  Execute  Swipe with directions as eLeft and velocity eMedium and starting percentage as 15 and ending percentage as 85
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("Description") = "Execut swipe with directions as eLeft and velocity eMedium and starting percentage as 15 and ending percentage as 85"
Environment("ExpectedResult") = "Simulates a gesture on a MobiDevice with directions as eLeft and velocity eMedium and starting percentage as 15 and ending percentage as 85"
strResult = VerifySwipe(objMobiDevice  ,eLEFT ,eMEDIUM,15,85,obj_RightLeft)

'Step 108 : Execute 'ToString
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute TOString method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute TOString on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "TOString should return the object type and class."
strResult =  VerifyTOString(objMobiDevice)

'Step 109 : Execute 'WaitProperty 
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute WaitProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value but shouldn't report the result."
strResult = VerifyWaitProperty(objMobiDevice, "name" , "Phone Lookup", 5000, True)

'Step 110: Execute SetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetTOProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetTOProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "SetTOProperty should set the value of the test object property."
arrProp = Array("name")
strResult = VerifySetTOProperty(objMobiDevice,  arrProp)

'Navigate back to Controls List
GoToScreen "Controls"

'Step 111 : Execute ButtonPress menu
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ButtonPress method for Menu on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ButtonPress menu." & VBNewLine
Environment("ExpectedResult") = "Simulates pressing a harware button Menu  on mobidevice ."
strResult = VerifyButtonPress(objMobiDevice , "menu")

'Step 112 : Execute ButtonPress back
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ButtonPress method for Back on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ButtonPress back" & VBNewLine
Environment("ExpectedResult") = "Simulates pressing a harware button Back on mobidevice ."
strResult = VerifyButtonPress(objMobiDevice , "back")

'Step 113 : Execute ButtonPress without any parameters
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ButtonPress method for Back on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ButtonPress back" & VBNewLine
Environment("ExpectedResult") = "Proper error message should be thrown ."
strResult = VerifyButtonPress(objMobiDevice , " ")

'Step 115 : Execute Type
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Type method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Type." & VBNewLine
Environment("ExpectedResult") = "Type on Device window."
'LogOut from screen
Flag = LogOut 
strResult =VerifyType(objMobiDevice , "text" )

'Hide device keypad in case of nativeAutomation.
If MobiDevice("Phone Lookup").MobiElement("Keypad").Exist(3) Then
	objMobiDevice.ButtonPress eBACK
wait 2
End If

'' Step 116   Execute Activate 
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Activate method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Activate on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Activates the window"
strResult =  VerifyActivate(objMobiDevice)

'*********************************************************************************************************************

'End test iteration
EndTestIteration()

































































































