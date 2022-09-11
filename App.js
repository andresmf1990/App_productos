/*MIS APUNTES
class=PRODUCT-FORM se define como una clase ATRIBUTOS nombre-precio-año
METODOS listar productos-crear producto-obtener producto po id

class=APP es otra clase la que interactúa con la interfaz
METODOS qué hará ese botón (mensaje/llama un producto)
*/
/*MIS APUNTES
constructor del "producto" elementos que serán usados cada vez que sea llamado
*/
class Product{
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}
/*MIS APUNTES
interacción por pantalla, click en elementos que activan funciones
*/
class UI{
    /*MIS APUNTES
    'product-list'/'div' llama a las class de html para referenciarlas
    */
    agregrarProducto(producto){
        const productList = document.getElementById('product-list');
        const elemento = document.createElement('div');
        elemento.innerHTML =`
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Nombre producto</strong>: ${producto.nombre}
                <strong>Valor producto</strong>: ${producto.precio}
                <strong>Año prodcuto</strong>: ${producto.año}
                <a href="#" class="btn btn-danger" name="eliminar">Eliminar</a>
            </div>
        </div>
        `;
        productList.appendChild(elemento);
    }
    /*MIS APUNTES
    reset=js volver a cero
    */
    resetearFormulario(){
        document.getElementById('product-form').reset();
    }
    /*MIS APUNTES
    'danger' color del css
    */
    eliminarProducto(elemento){
        if(elemento.name === 'eliminar'){
            elemento.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje('Producto eliminado', 'danger');
        }
            
    }
    /*MIS APUNTES
    mt-4 distancia entre márgenes
    2000 tiempo en milisegundos de la duración del mensaje en pantalla*/
    mostrarMensaje(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //mostrando en pantalla
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function (){
            document.querySelector('.alert').remove();
        },2000);
    }
}

//Eventos del DOM...document object model (evento del html submit/mensaje de bienvenida)

document.getElementById('product-form')
.addEventListener('submit',function(e){
    const nombre = document.getElementById('name').value;
    const precio = document.getElementById('price').value;
    const año = document.getElementById('year').value;

    const producto = new Product(nombre,precio,año);

    const ui = new UI ();
    if(nombre === '' || precio === '' || año === ''){
        return ui.mostrarMensaje('Complete todo el formulario', 'info');

    }
    ui.agregrarProducto(producto);
    ui.resetearFormulario();
    ui.mostrarMensaje('Producto agregado correctamente', 'success');


    e.preventDefault();
});
document.getElementById('product-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.eliminarProducto(e.target)
});
    