
let input = document.querySelector('.city').value;

document.querySelector('button').addEventListener('click', getResourse)

function getResourse() {

    let input = document.querySelector('input');

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=2acf1a5953a5a46f6a66d824118e0fba`)
        .then(data => data.json())
        .then(data => {
            console.log(data)

            document.querySelector('.city').innerHTML = data.city.name;
            document.querySelector('.current').innerHTML = Math.round(data.list[0].main.temp - 273.15) + '&deg'
            let times = document.querySelectorAll('.time p')
            for (let i = 0; i < times.length; i++) {
                let time = data.list[i].dt_txt
                times[i].textContent = time.slice(10, 16)
            }
            document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png">`

        })
}