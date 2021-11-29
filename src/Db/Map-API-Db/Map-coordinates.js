import TeamDb from '../Team-Db/Team-Db.json'
function showBranchHead(branch) {
    const branchArray = Object.keys(TeamDb).filter(i => TeamDb[i]?.branch?.[0] === branch),
        managerID = branchArray.filter(i => TeamDb[i].branch[1])[0],
        managerName = `${TeamDb[managerID].surname} ${TeamDb[managerID].name} ${TeamDb[managerID].middlename}`;
    return [ managerName, managerID ]
}
const coordinates = {
    branch_femida:{
        geometry:[55.787973, 37.511266],
        iconContent:'',
        iconCaption:'Филиал "Фемида"',
        preset:"islands#blueCircleDotIconWithCaption",
        balloonText:"Заведующий филиалом «Фемида»:<br><b>Романенков Андрей Федорович</b>",
        link:"",
        balloonImg:"",
        comment:{
            head:showBranchHead("Фемида"),
            adress:["г. Москва, ул. Куусинена д.19А каб. 303",""],
            workingTime:["Пн-Пт: 9:00-18:00", "Сб-Вс: Выходной"],
            phones:["+7 (905) 162-96-60", "+7 (915) 296-29-29"],
            eMail:["andrrom@mail.ru"],
            payment:null
        }
    },
    branch_interlawer:{
        geometry:[55.720672, 37.417643],
        iconContent:'',
        iconCaption:'Филиал "Интерлоер"',
        preset:"islands#blueCircleDotIconWithCaption",
        balloonText:"Заведующий филиалом «Интерлоер»:<br><b>Охраменко Владимир Владимирович</b>",
        link:"http://www.interlawyer.info",
        balloonImg:"",
        comment:{
            head:showBranchHead("Интерлоер"),
            adress:["г. Москва,  ул. Кутузова, д. 2,/111",""],
            workingTime:["Пн-Пт: 9:00-18:00", "Сб-Вс: Выходной"],
            phones:["+7 (495) 226-09-54","+7 (495) 760-65-53"],
            eMail:["advocat@interlawyer.info"],
            payment:['Филиал "Адвокатская консультация "ИНТЕРЛОЕР""','Московская коллегия адвокатов "ЗАЩИТА"','ПАО "ПРОМСВЯЗЬБАНК',"БИК: 044525555","ИНН: 7744000812","КПП: 772201001","Корреспондентский счёт: 30101810400000000555","SWIFT: PRMSRUMM","Расчетный счет RUR: 40703810000000003520","Текущий расчетный счет: 40703840200000000393", "Валютный счет  USD$: 40703840800001000394"]
        }
    },
    branch_18:{
        geometry:[55.859802, 37.664860],
        iconContent:'',
        iconCaption:"Филиал №18",
        preset:"islands#blueCircleDotIconWithCaption",
        balloonText:"Заведующий филиалом № 18:<br><b>Охрименко Дмитрий Александрович</b>",
        link:"",
        balloonImg:"",
        comment:{
            head:showBranchHead(18),
            adress:["г. Москва, ул. Радужная, д.11 кв.61"],
            workingTime:["Пн-Пт: 9:00-18:00", "Сб-Вс: Выходной"],
            phones:null,
            eMail:null,
            payment:null
        }
    },
    branch_8:{
        geometry:[55.976398, 37.178700],
        iconContent:'',
        iconCaption:"Филиал №8",
        preset:"islands#blueCircleDotIconWithCaption",
        balloonText:"Заведующий филиалом № 8<br><b>Ряховский Олег Александрович</b>",
        link:"",
        balloonImg:"",
        comment:{
            head:showBranchHead(8),
            adress:["г. Зеленоград, Заводская 16 а, офис 3"],
            workingTime:["Пн-Пт: 9:00-18:00", "Сб-Вс: Выходной"],
            phones:null,
            eMail:null,
            payment:null
        }
    },
    branch_5:{
        geometry:[56.185873, 36.977101],
        iconContent:'',
        iconCaption:"Филиал №5",
        preset:"islands#blueCircleDotIconWithCaption",
        balloonText:"Заведующий филиалом № 5:<br><b>Миронов Анатолий Николаевич</b>",
        link:"http://mkasol.ru",
        balloonImg:"",
        comment:{
            head:showBranchHead(5),
            adress:["Московская обл., г. Солнечногорск, ул. Советская, д.9, кв.7"],
            workingTime:["Пн-Пт: 9:00-18:00", "Сб-Вс: Выходной"],
            phones:null,
            eMail:null,
            payment:null
        }
    },
    branch_4:{
        geometry:[55.742448, 37.546390],
        iconContent:'',
        iconCaption:"Филиал №4",
        preset:"islands#blueCircleDotIconWithCaption",
        balloonText:"Заведующий филиалом № 4:<br><b>Денисов Сергей Иванович</b>",
        link:"",
        balloonImg:"",
        comment:{
            head:showBranchHead(4),
            adress:["г. Москва, ул.  Студенческая, 26/3 стр.1"],
            workingTime:["Пн-Пт: 9:00-18:00", "Сб-Вс: Выходной"],
            phones:null,
            eMail:null,
            payment:null
        }
    },
    branch_3:{
        geometry:null,
        iconContent:'',
        iconCaption:"Филиал №3",
        preset:"islands#blueCircleDotIconWithCaption",
        balloonText:"Заведующий филиалом № 3:<br><b>Жидков Сергей Георгиевич</b>",
        link:"",
        balloonImg:"",
        comment:{
            head:showBranchHead(3),
            adress:["г. Москва, ул. Поклонная, д.11, стр. 1"],
            workingTime:["Пн-Пт: 9:00-18:00", "Сб-Вс: Выходной"],
            phones:null,
            eMail:null,
            payment:null
        }
    },
    branch_2:{
        geometry:[55.775819, 37.698538],
        iconContent:'',
        iconCaption:"Филиал №2",
        preset:"islands#blueCircleDotIconWithCaption",
        balloonText:"Заведующая филиалом № 2:<br><b>Трегуб Ольга Анатольевна</b>",
        link:"",
        balloonImg:"https://avatars.mds.yandex.net/get-altay/859900/2a0000015f57ecdcf9997bcd4ad7e1420b57/XXXL",
        comment:{
            head:showBranchHead(2),
            adress:["г. Москва, Рубцовская набережная, д. 4, корп. 3"],
            workingTime:["Пн-Пт: 9:00-18:00", "Сб-Вс: Выходной"],
            phones:["8 (495) 632-26-97"],
            eMail:null,
            payment:null
        }
    },
    branch_1:{
        geometry:[55.767379, 37.584293],
        iconContent:'МКА "Защита"',
        iconCaption:'',
        preset:"islands#lightBlueStretchyIcon",
        balloonText:"Здесь располагается Головой Офис",
        link:"http://мказащита.рф",
        balloonImg:"https://avatars.mds.yandex.net/get-altay/2838749/2a000001734cd3aca10546fd4c4c22f8e8dd/XXXL",
        comment:{
            head:showBranchHead(1),
            adress:["123056 г. Москва, ул. Зоологическая, д. 30, стр. 2, офис III","https://yandex.ru/maps/-/CCUqE8rpdC"],
            workingTime:["Пн-Пт: 10:00-17:00", "Сб-Вс: Выходной"],
            phones:["8 (495) 769-68-89","8 (499) 252-65-22"],
            eMail:["advokaty.zaschita@yandex.ru"],
            payment:['Московская коллегия адвокатов "Защита"','ПАО "КРОСНАБАНК"',"БИК:","ОГРН","ИНН","КПП","Корр.счёт","SWIFT","расчетный счет"]
        }
    }
}

export default coordinates;