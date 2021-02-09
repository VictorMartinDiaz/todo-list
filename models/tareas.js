const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor() {

        this._listado = {};

    }

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    crearTarea(desc) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            
            this._listado[tarea.id] = tarea;
        });
    }

    listadoCompleto () {
        const idx = `${i+1}`.cyan;
        const {desc, completadoEn} = tarea;
        const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;

        this.listadoArr.forEach((tarea, i) => {
            this._listado[tarea.id] = tarea;
            console.log(`${idx} ${desc} :: ${estado}`);
        });

    }

}

module.exports = Tareas;