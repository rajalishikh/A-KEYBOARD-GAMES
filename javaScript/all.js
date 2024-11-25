// keypress section 

function keyup(event){
    let latter=event.key
//    console.log('user press',latter)
//    find the latter which come screen randomly
let find_random_latter=document.getElementById('screen_output');
let find_random_latter_text=find_random_latter.innerText.toLowerCase()
// console.log('randomly come latter',find_random_latter_text)

// find the scoring part 
let scorePart=find_id("score_id")
let scorePart_int=parseInt(scorePart)
// console.log('score part',scorePart_int)

if(latter === find_random_latter_text){
    // console.log('Plyer press the right button')
    
    let newScore=scorePart_int+1;
    console.log("total",scorePart_int)
    let set=document.getElementById('score_id')
    set.innerText=newScore
    

    continue_game()
    remove_random_color(find_random_latter_text)
}else{
    console.log("Dhur vhiya ba apu right button press koro ")
    let find_life=find_id('Life_part');
    let find_id_to_int=parseInt(find_life)
     let new_life=find_id_to_int-1;
     let set_life=document.getElementById('Life_part');
     set_life.innerText=new_life
    //  add condition when life is zero 

     if(find_id_to_int==0){
        show_the_score_part()

     }
}
    
}

// find the value when the user press keyboard 
document.addEventListener('keyup',keyup)
// continue the game 

function continue_game(){
    let random_latter=make_random_number();

    let find_random_latter_home=document.getElementById('screen_output')
    find_random_latter_home.innerText=random_latter;

    set_random_color(random_latter)
}

// play the game
function game_start(){
    add_Class_name('home_page')
    remove_class_name('keyboard_page')
    continue_game()
    

}
// show the final score part 

function show_the_score_part(){
    add_Class_name('home_page')
    add_Class_name('keyboard_page')
    remove_class_name('final_score')
    let find_last_score=find_id('score_id')
    setElement('final_output_total',find_last_score)
    
    
    
}

// play again part
function play_again(){
    add_Class_name('home_page')
    add_Class_name('final_score')
    remove_class_name('keyboard_page')
    setElement('Life_part',5)
    setElement('score_id',0)

    
    

}