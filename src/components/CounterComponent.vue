<template>
    <img alt="Vue logo" src="../assets/logo.png">
    <div className='counter'>
        <h1>Making A Counter With A Composable</h1>
        <div>
            <span className='counter-count'>{{ count }}</span>
        </div>
        <div className='counter-btns'>
            <button className='counter-btn' @click="add">
                Add
            </button>
            <button className='counter-btn' @click="reset">
                Reset
            </button>
            <button className='counter-btn' @click="subtract">
                Subtract
            </button>
        </div>
        <div className='counter-input'>
            <input class="input" aria-label="numInput" type="number" v-model="numInput" @keyup.enter="setValue(numInput)" />
        </div>
        <div>
            <button className='counter-btn' @click="setValue(numInput)">
                Set Value
            </button>
        </div>
    </div>
</template>

<script>
import CounterLogic from '../composables/CounterLogic.js'

export default {
    name: 'CounterComponent',
    setup() {

        const { count, numInput, add, reset, subtract, setValue } = CounterLogic();

        return { count, numInput, add, reset, subtract, setValue };
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Patua+One&family=Raleway&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

body {
  background-color: #16161a;
  color: #fffffe;
}

.counter {
    max-width: 600px;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fffffe;
}

.counter-count {
    font-family: 'Patua One', cursive;
    font-size: 50px;
}

.counter-btn {
    background-color: #7f5af0;
    color: #fffffe;
    margin: 5px;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
}

.counter-btn:hover {
  background-color: #72757e;
  cursor: pointer;
}

.input {
  border-radius: 5px;
  border-style: ridge;
  padding: 10px;
  background-color: #16161a;
  color: #94a1b2;
  font-size: 16px;
}
</style>