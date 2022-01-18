function createClassRoom(numbersOfStudents = 0) {
    function studentSeat(seat = 0) {
        return () => seat;
    }

    let students = [];

    for (i = 0; i < numbersOfStudents; i++) {
        students[i] = studentSeat(i + 1);
    }
    return students;
}

let classRoom = createClassRoom(10);
