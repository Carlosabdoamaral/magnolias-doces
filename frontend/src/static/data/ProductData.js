import bolo from '../images/bolo.jpeg'
import bolo_pote from '../images/bolo_copo.jpeg'
import brownie from '../images/brownie.jpeg'
import cupcake from '../images/cupcake.jpeg'
import docinhos from '../images/docinho.jpeg'

export const ProductData= [
    {
        name : "Bolos por encomenda",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius dolor arcu, eget suscipit diam dignissim sed. Mauris dictum maximus malesuada. Aliquam dapibus, nibh vitae interdum pharetra",
        image : bolo,
        image_arr : [bolo, bolo, bolo, bolo, bolo, bolo, bolo],
        value : 75.0,
        flavor: ["Ninho & Morango", "Maracujá & Brigadeiro ao leite", "Mousse de Limão", "Cocada cremosa", "Brigadeiro Belga"]
    },

    {
        name : "Bolos de pote",
        description : "",
        image : bolo_pote,
        image_arr : [bolo_pote, bolo_pote, bolo_pote, bolo_pote, bolo_pote],
        value : 75.0,
        flavor: ['4 leites', "Dois amores", "Brigadeiro", "Dois amores", "Brigadeiro", "Dois amores", "Brigadeiro"]
    },

    {
        name : "Copo da felicidade",
        description : "",
        image : bolo_pote,
        image_arr : [bolo_pote, bolo_pote, bolo_pote, bolo_pote, bolo_pote],
        value : 75.0,
        flavor: ['Kinder Bueno', "Dois amores", "Brigadeiro"]
    },

    {
        name : "Brownies",
        description : "",
        image : brownie,
        image_arr : [brownie, brownie,brownie,brownie,brownie,brownie],
        value : 75.0,
        flavor: ["Nutella", "Doce de leite"]
    },

    // {
    //     name : "Chocotones",
    //     description : "",
    //     image : chocotone,
    //     image_arr : [chocotone,chocotone,chocotone,chocotone,chocotone,chocotone,chocotone,chocotone,],
    //     value : 75.0,
    //     flavor: ["Nutella", "Doce de leite"]
    // },

    {
        name : "Cupcakes",
        description : "",
        image : cupcake,
        image_arr : [cupcake,cupcake,cupcake,cupcake,cupcake,cupcake],
        value : 75.0,
        flavor: ["Nutella", "Doce de leite"]
    },

    {
        name : "Docinhos",
        description : "",
        image : docinhos,
        image_arr : [docinhos,docinhos,docinhos,docinhos,docinhos,docinhos,],
        value : 75.0,
        flavor: ["Ferrero Rocher", "Ninho", "Ninho & Nutella", "Brigadeiro Belga", "Casadinho", "Bicho de pé"]
    },
]
