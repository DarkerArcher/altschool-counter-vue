<template>
    <div class="home-content">
        <h1>Home</h1>
        <p>Home page</p>
        <p>
            Click the button below to see the counter component.
        </p>
        <router-link to="/counter"><button className='counter-btn'>
            Counter
        </button></router-link>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Patua+One&family=Raleway&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

.home-content > h1 {
    color: #fffffe;
}

.home-content {
    max-width: 600px;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.counter-btn {
    background-color: #7f5af0;
    color: #fffffe;
    margin: 5px;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
}

p {
    color: #94a1b2
}
</style>