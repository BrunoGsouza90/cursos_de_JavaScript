class Curso{

    static cursos = []

    constructor(){



    }

    static getTodosCursos(){

        return Curso.cursos

    }

    static getCurso(indice){

        return Curso.cursos[indice]

    }

    static addCurso(novoCurso){

        Curso.cursos.push(novoCurso)

    }
    
    static renomearCurso(indice, novo_nome){

        Curso.cursos[indice] = novo_nome

    }

    static removerCurso(indice){

        Curso.cursos.splice(indice, 1)

    }

    static apagarCursos(){

        Curso.cursos = []

    }

}

export {Curso}