export default {
    warriors: {
        questions: [
            {
                text: "Позволить войнам разрушать хижины в поселении, если они посчитают их безвкусными?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drotts: -2,
                        bonds: -3,
                        thraels: -1,
                    },
                    no: {
                        warriors: -2,
                        drotts: 1,
                        bonds: 1,
                        thraels: 0,
                    }
                }
            },
            {
                text: "Позволить вашим войнам собирать личную дань с жильцов вашего поселения?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drotts: -1,
                        bonds: -3,
                        thraels: -1,
                    },
                    no: {
                        warriors: -1,
                        drotts: 1,
                        bonds: 1,
                        thraels: 1,
                    }
                }
            },
            {
                text: "Один из ваших войнов решил стать кузнецом. Позволить ему?",
                dependencies: {
                    yes: {
                        warriors: -2,
                        drotts: 1,
                        bonds: 2,
                        thraels: 1,
                        gold: -250
                    },
                    no: {
                        warriors: 1,
                        drotts: 1,
                        bonds: -2,
                        thraels: 1,
                    }
                }
            },
            {
                text: "Разрешить войнам тренировать свои навыки на жителях?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drotts: -1,
                        bonds: -2,
                        thraels: -1,
                        gold: -250
                    },
                    no: {
                        warriors: -2,
                        drotts: 1,
                        bonds: 1,
                        thraels: 1,
                    }
                }
            },
        ]
    },
    drotts: {
        questions: [
            {
                text: "Жрецам нужно принести в жертву одного из рабов во славу Одина. Позволить?",
                dependencies: {
                    yes: {
                        warriors: 1,
                        drotts: 2,
                        bonds: 0,
                        thraels: -2,
                    },
                    no: {
                        warriors: 0,
                        drotts: -3,
                        bonds: 0,
                        thraels: 1,
                    }
                }
            },
            {
                text: "Старший жрец предлагает организовать пир только для жрецов во славу Тора. Ораганизовать?",
                dependencies: {
                    yes: {
                        warriors: -2,
                        drotts: 2,
                        bonds: -2,
                        thraels: 0,
                    },
                    no: {
                        warriors: 0,
                        drotts: -3,
                        bonds: 0,
                        thraels: 0,
                    }
                }
            },
            {
                text: "Жрецы чувствуют, что Один разгневан на вас и просят средства из казны, для его успокоения. Выплатить?",
                dependencies: {
                    yes: {
                        warriors: 0,
                        drotts: 2,
                        bonds: -1,
                        thraels: 0,
                        gold: -250,
                    },
                    no: {
                        warriors: 0,
                        drotts: -1,
                        bonds: 1,
                        thraels: 0,
                    }
                }
            },
            {
                text: "Жрецы считают, что выплаты им с каждого набега обрадуют богов. Выплачивать?",
                dependencies: {
                    yes: {
                        warriors: -1,
                        drotts: 2,
                        bonds: -1,
                        thraels: -1,
                    },
                    no: {
                        warriors: 0,
                        drotts: -2,
                        bonds: 1,
                        thraels: 1,
                    }
                }
            },
        ]
    },
    bonds: {
        questions: [
            {
                text: "Ремесленики хотят получать доход с каждых ваших набегов. Позволить?",
                dependencies: {
                    yes: {
                        warriors: -2,
                        drotts: -1,
                        bonds: 2,
                        thraels: 0,
                        gold: -250
                    },
                    no: {
                        warriors: 0,
                        drotts: 1,
                        bonds: -1,
                        thraels: 0,
                    }
                }
            },
            {
                text: "Ремесленникам нужны средства для строительства драккаров. Вы готовы выделить для них средства?",
                dependencies: {
                    yes: {
                        warriors: 1,
                        drotts: 1,
                        bonds: 1,
                        thraels: 0,
                        gold: -500
                    },
                    no: {
                        warriors: -2,
                        drotts: 0,
                        bonds: 0,
                        thraels: 0,
                    }
                }
            },
            {
                text: "Ваши барды просят дать им возможность исполнять свои текста и звучать на все поселение в ночное время. Вы позволите?",
                dependencies: {
                    yes: {
                        warriors: -1,
                        drotts: -1,
                        bonds: 2,
                        thraels: -1,
                    },
                    no: {
                        warriors: 0,
                        drotts: 0,
                        bonds: -2,
                        thraels: 0,
                    }
                }
            },
            {
                text: "Охотники вашего поселения желают иметь новое снаряжение для охоты. Предоставить им?",
                dependencies: {
                    yes: {
                        warriors: -1,
                        drotts: 0,
                        bonds: 2,
                        thraels: 0,
                        gold: -500
                    },
                    no: {
                        warriors: -2,
                        drotts: +2,
                        bonds: 0,
                        thraels: 0,
                    }
                }
            },
        ]
    },
    thraels: {
        questions: [
            {
                text: "Рабы хотят получать плату за их адский труд. Выплачивать?",
                dependencies: {
                    yes: {
                        warriors: -1,
                        drotts: -2,
                        bonds: -1,
                        thraels: 2,
                        gold: -500
                    },
                    no: {
                        warriors: 0,
                        drotts: 0,
                        bonds: 0,
                        thraels: -3,
                    }
                }
            },
            {
                text: "Рабы просят вас сделать для них сегодня выходной. Позволить?",
                dependencies: {
                    yes: {
                        warriors: -2,
                        drotts: -2,
                        bonds: -2,
                        thraels: 3,
                    },
                    no: {
                        warriors: 0,
                        drotts: +2,
                        bonds: 0,
                        thraels: -3,
                    }
                }
            },
            {
                text: "Рабы-должники просят простить им долги. Простить?",
                dependencies: {
                    yes: {
                        warriors: -3,
                        drotts: -3,
                        bonds: -3,
                        thraels: 3,
                        gold: -500
                    },
                    no: {
                        warriors: 1,
                        drotts: 1,
                        bonds: 1,
                        thraels: -3,
                    }
                }
            },
            {
                text: "Один из рабов сбежал. Отправить группу на его поиски?",
                dependencies: {
                    yes: {
                        warriors: -1,
                        drotts: 1,
                        bonds: 0,
                        thraels: -2,
                        gold: -200
                    },
                    no: {
                        warriors: 1,
                        drotts: -2,
                        bonds: -1,
                        thraels: 3,
                    }
                }
            },
        ]
    },
}