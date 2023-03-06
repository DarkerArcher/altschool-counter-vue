<template>
    <div class="error-page">
        <div>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
        <div>
            <p>Click the button below to go back to the home page.</p>
            <router-link to="/"><button className='counter-btn'>
                    Home
                </button></router-link>
        </div>
    </div>
</template>

<style>
.error-page {
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

h1 {
    color: #fffffe;
}

p {
    color: #94a1b2
}
</style>