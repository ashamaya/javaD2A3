const tshirt = document.createElement('button');
document.body.appendChild(tshirt);
tshirt.innerHTML = "TSHIRT";
tshirt.setAttribute("value", "tshirt");

const pant = document.createElement('button');
document.body.appendChild(pant);
pant.innerHTML = "PANT";

const ball = document.createElement('button');
document.body.appendChild(ball);
ball.innerHTML = "BALL";

const volleyball = document.createElement('button');
document.body.appendChild(volleyball);
volleyball.innerHTML = "VOLLEYBALL";

tshirt.addEventListener('click', buy);
pant.addEventListener('click', buy);
ball.addEventListener('click', buy);
volleyball.addEventListener('click', buy);

function buy(event) {
    if (event.target.value == "tshirt"){

        itemdetail = {
            price: 500,
            discount: '20%',
            'price after discount': 500 * 80 /100,
        };

    }
    else if (event.target.value == "pant"){

        itemdetail = {
                price: 600,
                discount: '20%',
                'price after discount': 600 * 80 /100,
        };
    }
    else if (event.target.value == "ball"){
        itemdetail = {
            price: 700,
            discount: '20%',
            'price after discount': 700 * 80 /100,
        };
    }
    else if (event.target.value == "volleyball"){
        itemdetail = {
            price: 800,
            discount: '20%',
            'price after discount': 800 * 80 /100,
        };
    }

console.log(itemdetail);
}