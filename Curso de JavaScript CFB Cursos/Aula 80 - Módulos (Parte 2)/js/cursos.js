const cursos = ['JavaScript', 'HTML', 'CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']
export {cursos}

export function getTodosCursos(){

    return cursos

}


function getCurso(i_curso){

    return cursos[i_curso]

}
export default getCurso