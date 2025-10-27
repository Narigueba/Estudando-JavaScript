function recursiva(max) {
    if (max >= 100000) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-100);