// Beispieldaten zum Testen, z. B. Kursdaten, Testemails etc.

// Beispieldaten von Philipp >>> Postfach <<<

const messages = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel magna maximus, 
    rhoncus velit non, finibus quam. Sed pretium, diam eu euismod tincidunt, dui tortor sollicitudin nunc, 
    et dapibus augue ipsum at mi. Integer tincidunt, magna aliquet sodales sagittis, tellus ex molestie enim, 
    id tincidunt quam mi ut felis. Sed et ipsum id sem ultrices egestas id quis nisl. Etiam laoreet sem vel 
    mattis luctus. Vestibulum id velit fringilla, malesuada enim eu, cursus libero. Integer congue, lorem ac 
    eleifend convallis, mi odio dignissim diam, eu facilisis justo lorem in massa. Phasellus eget accumsan felis. 
    Ut id nisi odio. Morbi ac libero nunc. Sed ullamcorper, augue pulvinar pharetra sodales, odio felis ultricies 
    purus, vitae lobortis leo magna quis justo. Nunc et venenatis ligula. Sed vitae tempor ligula, a rutrum quam.`,
    
    `Mauris porta vitae velit ac pharetra. Sed lacinia, lectus non dictum lobortis, quam est cursus mauris, eget 
    rutrum orci elit vitae mi. Donec ac tempor velit. Praesent vel neque eu ante cursus bibendum. Aenean felis arcu, 
    tincidunt sed urna hendrerit, vestibulum convallis est. Aenean leo nulla, tincidunt at purus ut, varius sodales libero. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi suscipit porta ex, 
    id ornare elit cursus nec. Aenean id eleifend justo. Morbi sodales quis nulla ac ultrices.`,
    
    `In quis orci nec diam commodo imperdiet. Curabitur tincidunt, augue at congue aliquam, eros odio luctus justo, 
    quis congue ex sem eu ipsum. Etiam eleifend, velit vitae auctor hendrerit, nibh nisi varius nibh, sed vulputate risus 
    ligula ut dolor. Integer semper pharetra posuere. Donec eu tortor ac sapien tincidunt elementum sit amet in felis. 
    Morbi et fringilla quam, in faucibus sem. Suspendisse viverra auctor ligula, id suscipit enim interdum eu. Sed a dolor 
    id ex commodo pulvinar vel non tellus. In pulvinar scelerisque tellus, eget egestas augue efficitur ut. Praesent egestas 
    vel eros eget finibus. Phasellus nunc felis, pretium ac facilisis interdum, auctor eget odio. Phasellus ac neque sed 
    dolor elementum finibus a commodo velit. Cras sagittis rutrum sapien faucibus tristique. Vivamus finibus nec magna eu 
    luctus. Curabitur feugiat sapien a lorem sodales, vitae efficitur sapien ullamcorper.`,
    
    `Vestibulum egestas auctor libero, in viverra odio ultrices eu. Vestibulum tincidunt leo et diam molestie, hendrerit 
    auctor orci aliquam. Duis vehicula pharetra dapibus. Vivamus interdum vestibulum tincidunt. Vestibulum ultricies fringilla 
    aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat scelerisque lectus vel vestibulum. 
    Pellentesque iaculis viverra ante, fermentum congue nibh lacinia vitae. Maecenas tortor ex, molestie non erat id, commodo 
    aliquet nisi. Curabitur vitae lacinia risus. Etiam fermentum magna sed neque mollis, sit amet tristique dui malesuada. 
    Nunc dapibus sit amet erat tempor convallis. Duis lobortis neque in urna ullamcorper vestibulum. Nam iaculis, erat sit 
    amet dapibus cursus, justo dolor mollis diam, a pharetra urna leo in sem. Duis felis felis, finibus at nisl vitae, 
    suscipit aliquet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    
    `In sollicitudin metus vel purus vestibulum fringilla. Nullam quis ullamcorper mi. Duis vel leo ac odio aliquam rutrum nec 
    id augue. Aenean egestas mi eget ullamcorper varius. In bibendum lacinia quam, quis vulputate enim cursus nec. Etiam blandit 
    egestas nulla. Nam condimentum sem augue, quis tristique elit convallis in. Fusce venenatis nibh erat, ac lacinia nunc pretium 
    et. Cras suscipit vehicula diam, id mattis lorem tempus eu. Aliquam commodo vestibulum euismod. Vivamus ut sapien eros. Nullam 
    pulvinar quam placerat eros iaculis, vitae mattis libero rutrum. Mauris faucibus dui vel neque gravida accumsan. Donec lacus 
    purus, sagittis in nibh et, sodales gravida dui. Nulla pretium, nunc eu lobortis dictum, nulla diam eleifend libero, vel 
    fringilla libero mi vel justo. Donec posuere cursus efficitur.`,
    
    `Integer sed sodales orci, et volutpat libero. Maecenas a justo et odio varius malesuada. Mauris nec tristique tellus. 
    Nunc eleifend hendrerit pretium. Donec libero ante, scelerisque at scelerisque ut, vestibulum vitae lorem. Sed ornare 
    viverra sem in finibus. Quisque porttitor augue ut libero laoreet sagittis. Orci varius natoque penatibus et magnis dis 
    parturient montes, nascetur ridiculus mus. Nulla auctor, libero vitae sollicitudin tincidunt, ipsum lorem pellentesque nunc, 
    in rutrum mi libero eget quam. Nullam varius risus at dolor tristique lobortis. Donec ac sapien egestas, interdum tellus ut, 
    condimentum tortor. Vestibulum consequat, enim eget luctus consequat, urna dui consectetur risus, eu iaculis tellus diam et 
    lacus. Donec ut hendrerit felis. Cras id pulvinar nisi.`,
    
    `Ut mattis condimentum ex eu rutrum. Nullam ac malesuada ante, in malesuada diam. Phasellus ac interdum eros, eget 
    mattis dui. Aenean porttitor nulla tristique dictum mattis. Aenean blandit euismod dictum. Mauris accumsan, justo bibendum 
    consequat venenatis, urna lectus hendrerit est, vel faucibus nulla ex a nibh. Nullam in risus convallis, volutpat est in, 
    eleifend massa. Donec varius consectetur iaculis. Integer nec lacus nisi. Maecenas rhoncus est in sem fringilla eleifend. 
    Maecenas eros felis, luctus ut ex vel, facilisis pharetra lorem. Sed scelerisque neque non nunc volutpat sollicitudin. 
    Maecenas elementum ac mi sed sollicitudin. Aliquam convallis augue id neque scelerisque accumsan. Curabitur accumsan est vitae 
    quam dignissim ullamcorper. Praesent sed dui a elit blandit efficitur nec sed elit.`,
    
    `Sed facilisis arcu ac lorem dignissim, quis lacinia metus aliquet. Curabitur lobortis nibh tellus, et tincidunt ex 
    placerat vitae. Praesent quis massa molestie, consequat eros ut, imperdiet mi. Aenean dignissim ultrices arcu id imperdiet. 
    Ut scelerisque semper magna finibus tincidunt. Maecenas nec metus nisl. Suspendisse potenti. Etiam semper fermentum ligula. 
    Vivamus fringilla commodo ipsum, vel tempus risus imperdiet in. Pellentesque a posuere ex. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Etiam tempus libero lectus, vitae venenatis lorem facilisis sed. Duis euismod elit nunc, 
    id eleifend massa tristique non. Suspendisse potenti.`,
    
    `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In gravida aliquam dui, 
    nec efficitur massa venenatis ac. Donec aliquet dolor vitae augue sagittis imperdiet. Suspendisse feugiat accumsan laoreet. 
    Donec sodales dignissim tristique. Sed elementum tellus sed est pulvinar porttitor. Donec tristique nibh vitae sodales vestibulum. 
    Nullam in pellentesque ante.`,
    
    `Maecenas sollicitudin, nisi et accumsan semper, sem libero maximus elit, quis imperdiet magna est vitae risus. 
    In eu lorem semper, tempor lectus id, dignissim velit. Aliquam mauris turpis, feugiat ac posuere vitae, mattis id sem. 
    Donec enim turpis, mollis et orci eu, interdum convallis eros. Mauris efficitur enim a tellus rutrum facilisis. 
    Curabitur accumsan quis nisi vel posuere. Integer pharetra elit lacus, quis consequat odio facilisis vel. Fusce efficitur 
    tristique tempus. Curabitur rhoncus gravida libero, quis aliquam erat facilisis at. Etiam tincidunt lorem vitae rhoncus semper.`
  ];

  const emails = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    from: `test${i}@example.com`,
    folder_id: Math.floor(Math.random() * 3), // 0: Posteingang, 1: Gesendet, 2: Papierkorb
    datetime: new Date(
        2025, 
        Math.floor(Math.random() * 12), 
        Math.floor(Math.random() * 28) + 1, 
        Math.floor(Math.random() * 24), 
        Math.floor(Math.random() * 60), 
        Math.floor(Math.random() * 60)
    ),
    subject: `Testbetreff ${i}`,
    message: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => messages[Math.floor(Math.random() * messages.length)]).join(' '),
}));

export const folders = [
    {
        id: "0",
        parent : "default",
        folder_name: "Posteingang",
        mails: emails,
    },
    {
        id: "1",
        parent : "default",
        folder_name: "Gesendet",
        mails: [emails[0]],
    },
    {
        id: "2",
        parent : "default",
        folder_name: "Papierkorb",
        mails: [emails[1]],
    },
]
  