''Verify MobiElement  object methods

' Step1:Execute CaptureBitmap with .png file
' Step2:Execute CaptureBitmap with .bmp file
' Step3:Execute CaptureBitmap with .override.bmp file
' Step4:Execute CaptureBitmap with .override.png file
' Step5:Execute CheckProperty  when object is visible
' Step6:Execute SetTOProperty
' Step7:Execute Exist  when object is visible
' Step8:Execute GetTOProperties 
' Step9:Execute GetROProperty 
' Step10:Execute GetTOProperty
' Step11:Execute ToString 
' Step12:Execute WaitProperty  when object is visible
' Step13:Execute RefreshObject 
' Step14:Execute GetVisibleText  with Coordinates
' Step15:Execute GetVisibleText  without coordinates
' Step16:Execute Click  with boundary coordinates at Top-Left corner
' Step17:Execute Click  with boundary coordinates at Top-Right corner
' Step18:Execute Click  with boundary coordinates at Bottom-Left corner
' Step19:Execute Click  with boundary coordinates at Bottom-Right corner
' Step20:Execute Click   Without coordinates
' Step21:Execute Click with  x coordinates
' Step22:Execute Click with  y coordinates
' Step23:Execute Click with  Valid X & Y coordinates
' Step24:Execute Click with  Random coordinates
' Step25:Execute LongClick with VAlid Lapse without coordinates
' Step26:Execute LongClick With Valid Lapse At Boundary Coordinates
' Step27:Execute LongClick With Valid Lapse At y and xCoordinates 
' Step28:Execute DblClick  with Valid x & y  coordinates
' Step29:Execute DblClick  withoutcoords  
' Step30:Execute DblClick  withboundarycoords
' Step31:Execute DblClick  withrandomcoords  
' Step32:Execute DblClick   withonlyxcoord
' Step33:Execute DblClick   withonlyycoord
' Step34:Execute GetScrolledText 
' Step35:Execute  ChildObjects recursively
' Step36:Execute  ChildObjects non recursively
' Step37:Execute GetTextlocation with text
' Step38:Execute Scroll  Bottom
' Step39:Execute Scroll  TOP
' Step40:Execute Scroll  Right
' Step41:Execute Scroll  left
' Step42: Execute Swipe down
' Step43: Execute Swipe up
' Step44: Execute Swipe with directions as edown and velocity eFast
' Step45: Execute  Swipe with directions as eup and velocity eSlow
' Step46: Execute Swipe with directions as edown and velocity eMedium and starting percentage as 40(0-99)
' Step47: Execute Swipe with directions as eup and velocity eFast and starting percentage as 40(0-99)
' Step48: Execute Swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70 
' Step49: Execute Swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70 

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
''Call function to createreporttemplare
CreateReportTemplate()

'Set object for Element
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("AbsoluteLayout")

' Step: Navigate to Controls screen
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & ": " &_
"Navigate to Search screen" & VBNewLine
Environment("ExpectedResult") = "Controls screen should be displayed"
'Initial Setup
StrResult = NavigateScreenOnPhoneLookup("Controls" , objMobiElement , "")


'*********************************************************************************************************************
' Step1:Execute CaptureBitmap with .png file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with .png file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CaptureBitmap should capture the screenshot and save the png file to the defined location."
strResult =  VerifyCaptureBitmap(objMobiElement , "png")

' Step2:Execute CaptureBitmap with .bmp file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with  .bmp file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CaptureBitmap should capture the screenshot and save the bmp file to the defined location."
strResult =  VerifyCaptureBitmap(objMobiElement , "bmp")

' Step3:Execute CaptureBitmap with .override.bmp file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with override .png file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CaptureBitmap should throw an error messge for override messagefor .bmp file."
strResult =  VerifyCaptureBitmap(objMobiElement , "override_bmp")

' Step4:Execute CaptureBitmap with .override.png file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with .png file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiElement." & VBNewLine
Environment("ExpectedResult") =  "CaptureBitmap should throw an error messge for override message for .png  file."
strResult =  VerifyCaptureBitmap(objMobiElement , "override_png")

' Step5:Execute CheckProperty  when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute check property when object is visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should wait for the property to attain a value and report the result."
strResult = VerifyCheckProperty(objMobiElement, "visible" ,True , 5000, True)

' Step6:Execute SetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetToProperty"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetTOProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "SetTOProperty should set the value of the test object property."
arrProps = Array("accessibilitylabel","text")
strResult = VerifySetTOProperty(objMobiElement, arrProps)

' Step7:  Execute Exist  when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist method when object is  visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Exist should work correctly."
strResult = VerifyExist(objMobiElement, True, 5)

' Step8:Execute GetTOProperties 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperties method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperties on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetTOProperties should get all properties for an object that are used for description."
arrProps = Array("accessibilitylabel","visible","text")
strResult = VerifyGetTOProperties(objMobiElement, arrProps)

' Step9:Execute GetROProperty 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetROProperty method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetROProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetROProperty should get the correct run-time value for a property."
arrROProps = Array("enabled","text","accessibilitylabel")
arrROvalue= Array (True,"AbsoluteLayout","controls_list_item")
strResult =VerifyGetROProperty(objMobiElement, arrROProps, arrROvalue)

' Step10:Execute GetTOProperty 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperty method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetTOProperty should return the correct value for the test object property."
arrProps = Array("enabled","text")
arrvalue= Array (True,"AbsoluteLayout")
strResult =VerifyGetTOProperty(objMobiElement, arrProps, arrvalue)

' Step11:Execute ToString 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ToString method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ToString on MobiElement." & VBNewLine
Environment("ExpectedResult") = "ToString should return the object type and class."
strResult = VerifyToString(objMobiElement)

' Step12:Execute WaitProperty  when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Wait property when object is visible method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value but shouldn't report the result."
strResult = VerifyWaitProperty(objMobiElement, "visible", True, 5000, True)

' Step13:Execute RefreshObject 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Refresh method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on MobiElement." & VBNewLine
Environment("ExpectedResult") = "RefreshObject re-identifies the object in the application"
strResult = VerifyRefreshObject(objMobiElement)

' Step14:Execute GetVisibleText  with Coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText with coordinates "
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetvisibleText with coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetvisibleText  should return text within specified area."
strResult = VerifyGetVisibleText(objMobiElement , true)

' Step15:Execute GetVisibleText  without coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText without coordinates "
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetvisibleText without coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetvisibleText  should return text within specified area."
strResult = VerifyGetVisibleText(objMobiElement ,False)

' Step16:Execute Click  with boundary coordinates at Top-Left corner
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Top-Left corner on MobiList."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click  with boundary coordinates at Top-Left corner on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiElement ,"withboundarycoordsTopLeft")
GoToScreen "Controls"

' Step17:Execute Click  with boundary coordinates at Top-Right corner
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Top-Right corner on MobiList."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click  with boundary coordinates at Top-Right corner on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiElement,"withboundarycoordsTopRight")
GoToScreen "Controls"

' Step18:Execute Click  with boundary coordinates at Bottom-Left corner
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Bottom-Left corner on MobiList"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click  with boundary coordinates at Bottom-Left corner on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiElement,"withboundarycoordsBottomLeft")
GoToScreen "Controls"

' Step19:Execute Click  with boundary coordinates at Bottom-Right corner
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Bottom-Right corner on MobiDropdown."
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click  with boundary coordinates at Bottom-Right corner on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiElement,"withboundarycoordsBottomRight")
GoToScreen "Controls"

' Step20:Execute Click   Without coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method Without coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiElement, "withoutcoords")
GoToScreen "Controls"

' Step21:Execute Click with  x coordinates
' #######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with x coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiElement, "withxvalue")
GoToScreen "Controls"

' Step22:Execute Click with  y coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with y coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiElement, "withyvalue")
GoToScreen "Controls"

' Step23:Execute Click with  Valid X & Y coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with Valis x & y coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiElement, "withvalidvalue")
GoToScreen "Controls"

' Step24:Execute Click with  Random coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with Random coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiElement, "withrandomcoords")
GoToScreen "Controls"

' Step25:Execute LongClick with VAlid Lapse without coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick with VAlid Lapse without coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "LongClick should trigger press event on  the mobile device window for the specified time"
strResult = VerifyLongClick(objMobiElement  , "validlapsewithoutcoords")
GoToScreen "Controls"

' Step26:Execute LongClick With Valid Lapse At Boundary Coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick With Valid Lapse At Boundary Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary  coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "LongClick should trigger press event on  the mobile device window for the specified time"
strResult = VerifyLongClick(objMobiElement  , "validlapseboundarycoords")
GoToScreen "Controls"

' Step27:Execute LongClick With Valid Lapse At y and xCoordinates 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick With Valid Lapse with y & x coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary  coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") ="LongClick should trigger press event on  the mobile device window for the specified time"
strResult = VerifyLongClick(objMobiElement  , "withvalidlapsevalidvalue")
GoToScreen "Controls"

' Step28:Execute DblClick  with Valid x & y  coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With valid X & Y coords"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withvalidvalues")
GoToScreen "Controls"

' Step29:Execute DblClick  withoutcoords  
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With Valid Lapse At without Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withoutcoords")
GoToScreen "Controls"

' Step30:Execute DblClick  withboundarycoords
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With Valid Lapse At Boundary Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withboundarycoords")
GoToScreen "Controls"

' Step31:Execute DblClick  withrandomcoords  
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With Valid Lapse At random Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withrandomcoords")
GoToScreen "Controls"

' Step32:Execute DblClick   withonlyxcoord
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick At x Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withonlyxcoord")
GoToScreen "Controls"

' Step33:Execute DblClick   withonlyycoord
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With Valid Lapse At y Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withonlyycoord")
GoToScreen "Controls"

'Navigate to Scroll view screen
MobiDevice("Phone Lookup").MobiList("List").Select "ScrollView"
wait (2)
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("eleVerticalScrollView")

' Step34:Execute GetScrolledText 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description")  = "Execute GetScrolledText method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetScrolledText on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetScrolledText should return text of the scrolled window"
strResult = VerifyGetScrollText(objMobiElement,"mobielement", "false" , "" , "")

'Step35:Execute  ChildObjects recursively
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute childobject method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on mobilist." & VBNewLine
Environment("ExpectedResult") = "Return child object recursively in the application"
blnFlag = VerifyChildObjects(objMobiElement, "nonrecursive" , 100)

'Step36:Execute  ChildObjects non recursively
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute childobject method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on mobilist." & VBNewLine
Environment("ExpectedResult") = "Return child object non recursively in the application"
blnFlag = VerifyChildObjects(objMobiElement, "nonrecursive" , 100)


' Step37:Execute GetTextlocation with text
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTextlocation with text"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetScrolledText on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetTextLocation should return the co-ordinates"
strText  =  objMobiElement.GetVisibleText
strResult = VerifyGetTextLocation(objMobiElement, strText , True)

Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("eleVerticalScrollView")
' Step38:Execute Scroll  Bottom
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scroll bottom"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scroll down on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Scroll should scroll the list correctly towards down."
Set objListControlBottom = MobiDevice("Phone Lookup").MobiElement("elescrollviewBottom")
strResult = VerifyScroll(objMobiElement, "bottom", objListControlBottom)

' Step39:Execute Scroll  TOP
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scroll Top"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scroll down on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Scroll should scroll the list correctly towards top."
Set objListControlTop = MobiDevice("Phone Lookup").MobiElement("elescrollviewTop")
strResult = VerifyScroll(objMobiElement, "top", objListControlTop)

'Returned back to controls screen
MobiDevice("Phone Lookup").ButtonPress eBACK
wait 2
' Select HorizontalScrollView
MobiDevice("Phone Lookup").MobiList("List").Select "HorizontalScrollView"
wait 2

' Step40:Execute Scroll  Right
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scroll Right"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scroll down on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Scroll should scroll the list correctly towards Right."
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("eleHorizontalScrolView")
Set objListControlRight = MobiDevice("Phone Lookup").MobiElement("ScrollView_Right")
strResult = VerifyScroll(objMobiElement, "right", objListControlRight)

' Step41:Execute Scroll  left
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scroll Left"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scroll down on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Scroll should scroll the list correctly towards left."
Set objListControlleft = MobiDevice("Phone Lookup").MobiElement("ScrollView_Left")
strResult = VerifyScroll(objMobiElement, "left", objListControlleft)

' Navigate back to Controls screen
MobiDevice("Phone Lookup").ButtonPress eBACK
Wait 2
'Navigate to Scroll view screen
MobiDevice("Phone Lookup").MobiList("List").Select "ScrollView"
wait 2
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("eleVerticalScrollView")
Set objBottom = MobiDevice("Phone Lookup").MobiElement("eleDown_Swipe")
Set objTop = MobiDevice("Phone Lookup").MobiElement("eleUp_Swipe")

' Step42: Execute Swipe down
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe edown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a swipe edown gesture on a Mobi Element"
strResult = VerifySwipe(objMobiElement ,eDOWN ,,,,objBottom)

' Step43: Execute Swipe up
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe up"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe up gesture on a Mobi Element"
strResult = VerifySwipe(objMobiElement , eUP , , , , objTop)

' Step44: Execute Swipe with directions as edown and velocity eFast
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with direction as edow and velocity up"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with direction edown and velocity efast "
strResult = VerifySwipe(objMobiElement , eDOWN , eFAST  , , ,objBottom)

' Step45: Execute  Swipe with directions as eup and velocity eSlow
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with direction as eup and velocity up"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with direction eup and velocity efast"
strResult = VerifySwipe(objMobiElement  , eUP ,eSLOW ,  , ,objTop)

' Step46: Execute Swipe with directions as edown and velocity eMedium and starting percentage as 40(0-99)
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with direction as edow and velocity emedium"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with direction edown and velocity emedium "
strResult = VerifySwipe(objMobiElement , eDOWN , eMEDIUM  , 40 ,  ,objBottom)

' Step47: Execute Swipe with directions as eup and velocity eFast and starting percentage as 40(0-99)
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with direction as eup and velocity emedium"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with direction eup and velocity emedium"
strResult = VerifySwipe(objMobiElement  ,eUP ,eFAST, 40 , ,objTop)

' Step48: Execute Swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with direction as edow and velocity emedium"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with direction edown and velocity eslow "
strResult = VerifySwipe(objMobiElement , eDOWN , eSLOW ,30 ,70 ,objBottom)

' Step49: Execute Swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with direction as eup and velocity eslow"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with direction eup and velocity eslow"
strResult = VerifySwipe(objMobiElement  ,eUP ,eMEDIUM , 30 , 70 ,objTop)

'Back To Control Screen and navigate to horizontalScrollview
MobiDevice("Phone Lookup").ButtonPress eBACK
wait 2
MobiDevice("Phone Lookup").MobiList("List").Select "horizontalscrollview"
wait 1
Set obj_Right = MobiDevice("Phone Lookup").MobiElement("ScrollView_Right")
Set obj_Left = MobiDevice("Phone Lookup").MobiElement("ScrollView_Left")
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("eleHorizontalScrolView")

'Scroll to Right end.
objMobiElement.Scroll eRIGHT
wait 2

' Step50: Execute Swipe eleft
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eleft"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe eleft  gesture on a Mobi Element"
strResult = VerifySwipe(objMobiElement , eLEFT  , , , , obj_Left)

' Step51: Execute Swipe eright
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eright"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a swipe eright gesture on a Mobi Element"
strResult = VerifySwipe(objMobiElement  , eRIGHT,  , , ,obj_Right)

' Step52: Execute  Swipe with directions as eleft and velocity eSlow
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with direction as eleft and velocity up"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with direction eleft and velocity efast"
strResult = VerifySwipe(objMobiElement  ,  eLEFT ,eSLOW ,  ,,obj_Left)

' Step53: Execute Swipe with directions as eright and velocity eFast
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with direction as eright and velocity up"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with direction eright and velocity efast "
strResult = VerifySwipe(objMobiElement , eRIGHT , eFAST , , ,obj_Right)

' Step54: Execute Swipe with directions as eleft and velocity eFast and starting percentage as 30(0-99)
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with direction as eleft and velocity emedium"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with direction eleft and velocity emedium"
strResult = VerifySwipe(objMobiElement  ,eLEFT ,eMEDIUM ,30, ,obj_Left)

' Step55: Execute Swipe with directions as eright and velocity eMedium and starting percentage as 30(0-99)
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with direction as eright and velocity emedium"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with direction eright and velocity emedium "
strResult = VerifySwipe(objMobiElement , eRIGHT , eMEDIUM ,30, ,obj_Right)

' Step56: Execute Swipe with directions as eleft and velocity eMedium and starting percentage as 15 and ending percentage as 85
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with direction as eleft and velocity eslow"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with direction eleft and velocity eslow"
strResult = VerifySwipe(objMobiElement  ,eLEFT ,eMEDIUM ,15,85,obj_Left)

' Step57: Execute Swipe with directions as eright and velocity eSlow and starting percentage as 15 and ending percentage as 85 
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with direction as eright and velocity emedium"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with direction eright and velocity eslow "
strResult = VerifySwipe(objMobiElement , eRIGHT ,eSLOW ,15 ,85 ,obj_Right)

'returning back to controls screen
wait 2
MobiDevice("Phone Lookup").ButtonPress eBACK
wait 2

' Step58: Execute CheckProperty  when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute check property when object is not  visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should return false and  wait for the property to attain a value and report the result."
strResult = VerifyCheckProperty(objMobiElement, "visible" ,True , 15000, False)

' Step59: Execute Exist  when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist method when object is not  visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Exist should work correctly and return false."
strResult =VerifyExist(objMobiElement, False, 15)

' Step60: Execute WaitProperty  when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute wait property when object is not visible method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value but shouldn't report the result."
strResult = VerifyWaitProperty(objMobiElement, "visible", True, 15000, False)

Logout

wait 1
'Call function to end test iteration
EndTestIteration()












