var vm = new Vue({
    el: '#app',
    data : {
        // nombre: 'Alberto',
        // jefe: ["Alberto", "Juan", "Pedro", "Luis"],
        // tieneCobre: true,
        // numero: 0,
        // cedulas: { alberto: '123456789', juan: '987654321' },
        // mensaje: 'Hola mundo',
        // ok: false,
        // numero: [1, 2, 3,],
        // set: '',
        // ciudades: [
        //     {nombre: 'Madrid'},
        //     {nombre: 'Barcelona'},
        //     {nombre: 'Valencia'},
        //     {nombre: 'Sevilla'},
            
        // ],
        // datosUsuario: {
        //     nombre: 'Alberto',
        //     apellido: 'Rodriguez',
        //     edad: '30',
        //     email: 'algo@algo.com',
        //     telefono: '123456789',
        // }
        // plantilla: `
        //             <ul class="list-group">
        //                 <li class="list-group-item">An item</li>
        //                 <li class="list-group-item">A second item</li>
        //                 <li class="list-group-item">A third item</li>
        //                 <li class="list-group-item">A fourth item</li>
        //                 <li class="list-group-item">And a fifth one</li>
        //             </ul>
        //             `,
        // rojo: false,
        // src: 'https://www.cinemascomics.com/wp-content/uploads/2019/09/pelicula-caballeros-medievales-disney.jpg',
        nuevaTarea: '',
        tareas: [],
    },
    methods : {
        // cambiar: function() {
        //     this.nombre = "Alfonzo";
        // },
        // sumar: function() {
        //     this.numero = this.numero += 1;
        // },
        // pasarSiguienteJefe: function() {
        //     this.numero += 1;
        //     if (this.numero === 4) {
        //         this.numero = 0;
        //     }
        // }
        addTarea: function() {
            if(this.nuevaTarea!=''){
                this.tareas.push({
                    text: this.nuevaTarea,
                    completada: false,
                })
                this.nuevaTarea = ''
            }
        }
        // addTarea: function() {
        //     if(this.nuevaTarea!='')
        //     this.tareas.push({ text: this.nuevaTarea, completada: false })
        //     this.nuevaTarea='';
        //   }
    }
})