cursos = document.getElementById("cursos");

function confirmaBotao(){
    resp = confirm("Deseja mesmo abrir as informações do curso selecionado?");
    if(!resp){
        return;
    } 

    x = cursos.selectedIndex;
 
    abrir = window.open("", "abrir" + cursos.options[x], "width = 600, height = 300");
    
    if(x == 1){
        abrir.document.writeln("<p>Coordenação: Profº Antonio Cesar de Barros Munari</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.</p>");    
    }
    else if(x == 2){
        abrir.document.writeln("<p>Coordenação: Prof. Dr. José Luiz Antunes de Almeida</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>O tecnólogo em Eletrônica Automotiva participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva, supervisiona, coordena e orienta equipes na área automotiva, realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio, especifica instrumentos e equipamentos para teste de veículos, oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio, elabora orçamentos referentes à instrumentos e equipamentos usados na industria automotiva, gerencia e realiza vistorias, perícias, avaliações, arbitramento, laudo e parecer técnico referentemente à áreas afetadas à veículos especiais, carga e de passeio, supervisiona, coordena e orienta tecnicamente equipes de uma linha de inspeção veicular, é capaz de selecionar e desenvolver novas tecnologias levando-se em conta características técnicas, humanas, econômicas e gerenciais de sistemas automobilístico, opera e faz manutenção de equipamentos em inspeção veicular, estuda a viabilização técnico-econômica de uma oficina autorizada ou independente e supervisiona, coordena e orienta tecnicamente equipes de uma oficina autorizada ou independente.</p>");
    }
    else if(x == 3){
        abrir.document.writeln("<p>Coordenação: Prof. Me. Amilton Cordeiro de Freitas</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia os diversos processos, atuando no desenvolvimento e melhoria de produtos, dos processos de fabricação e na gestão de projetos, aliando competências das áreas de gestão, qualidade e controle ambiental. Exerce suas atividades em empresas do ramo metal-mecânico, incluindo indústrias manufatureiras e ferramentarias, podendo ainda atuar em institutos e centros de pesquisa, órgãos governamentais, escritórios de consultoria, dentre outros.</p>");    
    }
    else if(x == 4){
        abrir.document.writeln("<p>Coordenação: Profº Dr. Délvio Venanzi</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>O profissional que entende a fundo o que é Gestão da Qualidade é especializado em aplicar processos de melhoria e eficiência em linhas de produção.Alguém formado nessa área pode atuar em diferentes departamentos de uma organização, seja ela no setor de serviços, indústria, saúde etc.</p>");    
    }
    else if(x == 5){
        abrir.document.writeln("<p>Coordenação: Prof. Me. José Itamar Monteiro</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos. Ele gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais, podendo ainda ocupar-se do inventário de estoques, sistemas de abastecimento, programação e monitoramento do fluxo de pedidos.</p>");    
    }
    else if(x == 6){
        abrir.document.writeln("<p>Coordenação: Prof. Me. Samuel Mendes Franco</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>Atua como um integrador de tecnologia. Além de projetar e desenvolver projetos de manufatura, o profissional é responsável por agregar novas tecnologias voltadas para a Indústria 4.0. Oferece informações tecnológicas relacionadas às principais técnicas de produção empregadas na indústria mundial, tais como materiais e processos de fabricação, realidade aumentada e virtual, Internet das Coisas, Big Data, entre outros. É responsável por identificar dispositivos e ferramentas disponíveis no mercado. Como empreendedor, pode abrir sua própria consultoria ou empresa. Pode ainda atuar em pesquisas.</p>");    
    }
    else if(x == 7){
        abrir.document.writeln("<p>Coordenação: Profª Ma. Cécile Chaves Hernandez Garcia</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas de processos, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais para caracterização dos materiais poliméricos, além de processos de modelagem. O monitoramento da qualidade e dos processos de reciclagem envolvidos; a identificação e acompanhamento das variáveis relevantes, inclusive as referentes ao meio ambiente, são também funções desse profissional.</p>");    
    }
    else if(x == 8){
        abrir.document.writeln("<p>Coordenação: Prof. Dra. Suellen Signer Bartolomei</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como: tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície .São atividades inerentes aos egressos deste Curso o planejamento, gestão, controle dos processos e comercialização dos produtos metalúrgicos, através da seleção, dimensionamento de equipamentos e métodos de fabricação. Incluem-se as atividades de laboratórios de ensaios mecânicos e de ensaios metalográficos, com o domínio da interrelação entre microestrutura, propriedades e aplicações dos produtos metálicos. Este profissional possui competências de gestão ambiental, de pessoas e processos industriais. Pode atuar em diversas empresas do ramo metal-mecânico e ainda no ensino superior.</p>");    
    }
    else if(x == 9){
        abrir.document.writeln("<p>Coordenação: Prof. Dr. Lauro Carvalho de Oliveira</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas. Tem conhecimento de todos os materiais usuais em construção mecânica e suas aplicações práticas. Está capacitado a atuar na área de organização industrial mecânica, tanto para processos como para produtos industriais. Domina a técnica do projeto de dispositivos e ferramentas de produção mecânica. Pode dedicar-se ao ensino, à pesquisa tecnológica, bem como realizar vistoria, avaliação e laudo técnico, em seu campo profissional.</p>");    
    }
    else{
        abrir.document.writeln("<p>Coordenação: Profª Me. Joseli Vergara Marins</p>");
        abrir.document.writeln("<p>Carga horária: 2.880 horas</p>");
        abrir.document.writeln("<p>O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletro-médicos. Assessora a aquisição, executa a instalação, capacita usuários de equipamentos e sistemas biomédicos, além de participar de equipes de pesquisa aplicada. Responsável também pela implantação e controle das normas de segurança dos equipamentosnos serviços de saúde, pode atuar em hospitais, policlínicas, laboratórios, fabricantes e distribuidoras de equipamentos hospitalares.</p>");    
    }
}