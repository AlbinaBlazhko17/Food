'use strict'; 

window.addEventListener ("DOMContentLoaded", () => {
    //Tabs
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent =  document.querySelectorAll(".tabcontent"),
          tabsParent = document.querySelector (".tabheader__items");
    
    function hideTabContent() {
        tabsContent.forEach (item => {
            item.classList.add("hide");
            item.classList.remove("show","fade");
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add ("show","fade");
        tabsContent[i].classList.remove ("hide");
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener ('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains ("tabheader__item")){
            tabs.forEach ((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer

    const deadline = '2022-07-17';

    function getTimeRemaining (endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor (total / (1000 * 60 * 60 * 24)),
              hours = Math.floor (total / (1000 * 60 * 60) % 24),
              minutes = Math.floor ((total / 1000 / 60) % 60),
              seconds = Math.floor ((total / 1000) % 60);
        
        return {total,days,hours,minutes,seconds};
    }
});