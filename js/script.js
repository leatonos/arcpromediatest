document.getElementById('services-dropdown').addEventListener('mouseover',showDropDown() )
document.getElementById('services-dropdown').addEventListener('mouseout')


/**
 * It will show a hidden element that contains certain id selector
 * 
 * @param {string} hiddenElementId
 * 
 */
function showDropDown(hiddenElementId){
    document.getElementById(hiddenElementId).style.display = 'block'
}
