var PropostaSocial = require('./propostasocial');

module.exports = 
[
    new PropostaSocial( 'Pintura da quadra de esportes', 
                        ['Tem que ser feito nas férias', 'Tinta de primeira'],
                        ['Material', 'Mão de obra'], 
                        {id: 1, nome: 'E.M Domingos G. Gomes'},
                        ['Utilizar a quadra de esportes de noite durante 6 meses', 
                        'Agradecimento público da escola', 'Placa com a sua marca na quadra'] , 
                        {local: { endereco: 'Rua das Garças, 368, Campo Grande - MS' }},
                        [{url: 'assets/imgs/foto1.jpg', principal: true}, {url: 'assets/imgs/foto2.jpg', principal: false}]),
    new PropostaSocial( 'Conserto de bebedouro',
                        ['Tem que ser logo', 'Precisa torneira nova'],
                        ['Material', 'Mão de obra'], 
                        {id: 2, nome: 'E.E Maria Constamça de Barros Machado'},
                        ['Publicidade Interna', 'Agradecimento público da escola', 'Placa com a sua marca na quadra'] , 
                        {local: { endereco: 'Rua das Garças, 368, Campo Grande - MS' }},
                        [{url: 'assets/imgs/foto1.jpg', principal: false}, {url: 'assets/imgs/foto2.jpg', principal: true}]),
    new PropostaSocial( 'Ar condicionado para alunos 2º ANO B',
                        ['Tem que ser logo'],
                        ['Material', 'Instalação'], 
                        {id: 3, nome: 'E.E Maria Constamça de Barros Machado'},
                        ['Publicidade Interna', 'Agradecimento público da escola', 'Placa com a sua marca na quadra'] , 
                        {local: { endereco: 'Rua das Garças, 368, Campo Grande - MS' }},
                        [{url: 'assets/imgs/foto3.jpg', principal: true}, {url: 'assets/imgs/foto2.jpg', principal: false}])
];