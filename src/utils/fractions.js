export default {
    warriors: {
        questions: [
            {
                text: "bla bla blblblblabla bla blblal blalblalb dasd asd ds?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drots: -2,
                        bonds: 0,
                        thraels: 0,
                    },
                    no: {
                        warriors: -2,
                        drots: +2,
                        bonds: 0,
                        thraels: 0,
                    }
                }
            },
            {
                text: "Позволить вашим войнам собирать личную дань с жильцов вашего поселения?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drots: -1,
                        bonds: -3,
                        thraels: -1,
                    },
                    no: {
                        warriors: -1,
                        drots: 1,
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
                        drots: 1,
                        bonds: 2,
                        thraels: 1,
                        gold: -250
                    },
                    no: {
                        warriors: 1,
                        drots: 1,
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
                        drots: -1,
                        bonds: -2,
                        thraels: -1,
                        gold: -250
                    },
                    no: {
                        warriors: -2,
                        drots: 1,
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
                text: "bla bla blblblblabla bla blblal blalblalb dasd asd ds?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drots: -2,
                        bonds: 0,
                        thraels: 0,
                    },
                    no: {
                        warriors: -2,
                        drots: +2,
                        bonds: 0,
                        thraels: 0,
                    }
                }
            },
            {
                text: "bla bla blblblblabla bla blblal blalblalb dasd asd ds?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drots: -2,
                        bonds: 0,
                        thraels: 0,
                    },
                    no: {
                        warriors: -2,
                        drots: +2,
                        bonds: 0,
                        thraels: 0,
                    }
                }
            },
        ]
    },
    bonds: {
        questions: [
            {
                text: "bla bla blblblblabla bla blblal blalblalb dasd asd ds?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drots: -2,
                        bonds: 0,
                        thraels: 0,
                    },
                    no: {
                        warriors: -2,
                        drots: +2,
                        bonds: 0,
                        thraels: 0,
                    }
                }
            },
            {
                text: "Ремесленникам нужны средства для строительства драккаров. Вы готовы выделить для них средства?",
                dependencies: {
                    yes: {
                        warriors: 1,
                        drots: 1,
                        bonds: 1,
                        thraels: 0,
                        gold: -500
                    },
                    no: {
                        warriors: -2,
                        drots: 0,
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
                        drots: -1,
                        bonds: 2,
                        thraels: -1,
                    },
                    no: {
                        warriors: 0,
                        drots: 0,
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
                        drots: 0,
                        bonds: 2,
                        thraels: 0,
                        gold: -500
                    },
                    no: {
                        warriors: -2,
                        drots: +2,
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
                text: "bla bla blblblblabla bla blblal blalblalb dasd asd ds?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drots: -2,
                        bonds: 0,
                        thraels: 0,
                    },
                    no: {
                        warriors: -2,
                        drots: +2,
                        bonds: 0,
                        thraels: 0,
                    }
                }
            },
            {
                text: "bla bla blblblblabla bla blblal blalblalb dasd asd ds?",
                dependencies: {
                    yes: {
                        warriors: 2,
                        drots: -2,
                        bonds: 0,
                        thraels: 0,
                    },
                    no: {
                        warriors: -2,
                        drots: +2,
                        bonds: 0,
                        thraels: 0,
                    }
                }
            },
        ]
    },
}