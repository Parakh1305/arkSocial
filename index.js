// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');    //Variable for selecting menu items

//MESSAGES
const messagesNotification = document.querySelectorAll('#messages-notifications');    //Variable for selecting messages notification count
const messages = document.querySelector('.messages');


// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

// ------------- SIDE BAR ----------------
menuItems.forEach(item => {                         //Selecting each item
    item.addEventListener('click', () => {          //Adding event listener to perform task on set state
        changeActiveItem();
        item.classList.add('active');               // Adds active class to the clicked menu item
        if (item.id != 'notifications') {           //Selecting menu item other than notifications
            document.querySelector('.notifications-popup').style.display = 'none';           //Set notification popup to display:none
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';            //Set notification popup to display:block
            document.querySelector('#notifications .notifications-count').style.display = 'none';
        }
    })
})


//-------------- MESSAGES ----------------
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
})
