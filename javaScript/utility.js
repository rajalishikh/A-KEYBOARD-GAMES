// add  remove class list 
function add_Class_name(element){
    let x= document.getElementById(element);
    x.classList.add('hidden')


}

// kick out hidden 

function remove_class_name(element){
    let y=document.getElementById(element);
    y.classList.remove('hidden')
}

// make random color

function set_random_color(element){
    let x=document.getElementById(element)
    x.classList.add('bg-orange-500')
}
// remove random color
function remove_random_color(element){
    let x=document.getElementById(element)
    x.classList.remove('bg-orange-500')
} 

// find the id 

function find_id(element){
    let find_id=document.getElementById(element)
    let find_id_text=find_id.innerText;
    return find_id_text
}


// make random number

function make_random_number(){

    let all_latter='abcdefghijklmnopqrstuvwxyz'
    let separate=all_latter.split('')
    
    let make_random_number=Math.round(Math.random()*24);
    let random_latter=separate[make_random_number]
    return random_latter
    

}