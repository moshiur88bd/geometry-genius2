function calculateTriangleArea(){
        // get input field of base 
        const baseField = document.getElementById('triangle-base');
        const baseValueText = baseField.value;
        const base= parseFloat(baseValueText);
        baseField .value = '';
       
        // get input field of height 
        const heightField = document.getElementById('triangle-height');
        const heightValueText = heightField.value;
        const height = parseFloat(heightValueText);
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
        widthField.value = '';
        
        // get rectangle length 

        const lengthField = document.getElementById('rectangle-length');
        const lengthValueText = lengthField.value;
        const length = parseFloat(lengthValueText);
        lengthField.value = '';

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
        const area = base * height;
        setElementInnerText('parallelogram-area', area);

        // ellipse area calculate 
        const firstRadius = getInputValue('ellipse-first-radius');
        console.log(firstRadius);
        const secondRadius = getInputValue('ellipse-second-radius');
        const ellipseArea = 3.14 * firstRadius * secondRadius;
        setElementInnerText('ellipse-area', ellipseArea);
}

function calculateEllipseArea(){
        // ellipse area calculate 
        const majorRadius = getInputValue('ellipse-major-radius');
        const minorRadius = getInputValue('ellipse-minor-radius');
        const ellipseArea = 3.14 * majorRadius * minorRadius;
        setElementInnerText('ellipse-area', ellipseArea);
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