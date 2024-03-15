function calculateTriangleArea(){
        // get input field of base 
        const baseField = document.getElementById('triangle-base');
        const baseValueText = baseField.value;
        const base= parseFloat(baseValueText);
        
        // valudated of input value 
        if(isNaN(base)){
                alert('Please insert a Right Number');
                return;
        }
        baseField .value = '';
       
        // get input field of height 
        const heightField = document.getElementById('triangle-height');
        const heightValueText = heightField.value;
        const height = parseFloat(heightValueText);

         // valudated of input value 
         if(isNaN(height)){
                alert('Please insert a Right Number');
                return;
        }
        heightField.value = '';

        const area = 0.5 * base * height;
        const areaOfTriangle = document.getElementById('triangle-area');
        areaOfTriangle.innerText = area;
} 

function calculateRectangleArea(){
        // get rectangle width 
        const widthField = document.getElementById('rectangle-width');
        const widthValueText = widthField.value;
        const width = parseFloat(widthValueText);

         // valudated of input value 
         if(isNaN(width)){
                alert('Please insert a Right Number');
                return;
        }
        widthField.value = '';
        
        // get rectangle length 

        const lengthField = document.getElementById('rectangle-length');
        const lengthValueText = lengthField.value;
        const length = parseFloat(lengthValueText);

        lengthField.value = '';
         // valudated of input value 
         if(isNaN(length)){
                alert('Please insert a Right Number');
                return;
        }
        
        // calculate rectangle area
        const area = width * length;

        // show rectangle area 
        const rectangleArea = document.getElementById('rectangle-area');
        rectangleArea.innerText = area;

}

function calculateParallelogramArea(){
        // parallelogram area calculate 
        const base = getInputValue('parallelogram-base')
        const height = getInputValue('parallelogram-height');

        // valudated of input value 
        if(isNaN(base) || isNaN(height)){
                alert('Please insert a Right Number');
                return;
        }
        const area = base * height;
        setElementInnerText('parallelogram-area', area);

}

function calculateEllipseArea(){
        // ellipse area calculate 
        const majorRadius = getInputValue('ellipse-major-radius');
        const minorRadius = getInputValue('ellipse-minor-radius');
         // valudated of input value 
        if(isNaN(majorRadius) || isNaN(minorRadius)){
                alert('Please insert a Right Number');
                return;
        }
        const ellipseArea = 3.14 * majorRadius * minorRadius;
        const ellipseAreaToFixed = ellipseArea.toFixed(2);
        setElementInnerText('ellipse-area', ellipseAreaToFixed);
}

// reusable input value in a number 
function getInputValue(fieldId){
        const inputFieldId = document.getElementById(fieldId);
        const inputValueText = inputFieldId.value;
        const value = parseFloat(inputValueText);
        inputFieldId.value = '';
        return value;
}

// set reusable area 
function setElementInnerText(elementId, area){
        const element = document.getElementById(elementId);
        element.innerText = area;
}