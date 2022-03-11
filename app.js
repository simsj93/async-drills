document.addEventListener("DOMContentLoaded", () => {

    // function printString (string) {
    //  console.log(`${string} has been logged to the console.`); 
    // }; 
    // function interfunc () {
    //     printString ('Another message'); 
    // }
    // printString ('A message'); 

    // setTimeout(() => {
    //     interfunc(); 
    // }, 2000); 



    // function getWords (word) {
    //     console.log(word);
    // }

    // setTimeout(() => {
    //     getWords('hello'); 
    // }, 0);

    // setTimeout(() => {
    //     getWords('how are you?'); 
    // }, 3000);

    // setTimeout(() => {
    //     getWords('how are the kids?'); 
    // }, 5000); 

    // setTimeout(() => {
    //     getWords('okay later'); 
    // }, 2000);  

    // function done() {
    //     console.log('jobs done');
    // };



    // function countdown(num) {
    //     if (num == 0) {
    //         setTimeout(() => {
    //             done(); 
    //         }, 1000);
    //     } else {
    //         setTimeout(() => {
    //             console.log(num);
    //             countdown(num - 1);
    //         }, 1000);
    //     }
    // }
    // countdown(4);

    // lunchTime = false;
    // let orderMeSomeFood = new Promise((resolve, reject) => {
    //     let food = {
    //         lunch: 'sushi',
    //         drink: 'pilsner'
    //     }
    //     if (lunchTime == true) {
    //         resolve(food);
    //     } else {
    //         reject('not lunch time yet');
    //     }
    // })


    // orderMeSomeFood.then((passthrough) => {
    //     console.log(passthrough);
    // }).catch((passthrough) => {
    //     console.log(passthrough);
    // })

    // const done = () => console.log('finished'); 

    // const countdown = (num, callback) => {
    //     if (num == 0 ) {
    //         callback (); 
    //     } else {
    //         console.log(num); 

    //         setTimeout(() => {
    //             countdown(num - 1, callback); 
    //         }, 1000)
    //     }
    // }
    // countdown (4, done); 

    const lunchTime = false; 

    const orderMeSomeFood = () => {
        return new Promise ((resolve, reject) => {
            if (lunchTime) {
                resolve({
                    lunch: 'fish',
                    drink: 'seed oil'
                })
            } else {
                const lunchError = new Error ('no lunch'); 
                reject(lunchError); 
            }
        })
    };

    orderMeSomeFood()
    .then(res => console.log(res))
    .catch(err => console.log(err))

});


