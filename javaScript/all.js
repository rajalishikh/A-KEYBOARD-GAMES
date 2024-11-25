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