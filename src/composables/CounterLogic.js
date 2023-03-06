import { ref } from 'vue';

export default function CounterLogic() {
    const count = ref(0);
    const numInput = ref(0);

    const add = () => {
        count.value++;
    };
    const reset = () => {
        count.value = 0;
    };
    const subtract = () => {
        count.value--;
    };

    const setValue = (value) => {
        count.value = value;
    };

    return {
        count,
        numInput,
        add,
        reset,
        subtract,
        setValue
    };

}