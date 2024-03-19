import emptyImage from '../assets/empty.svg'

export function Tasks() {
    return (
        <main
            className="flex items-center justify-start flex-col py-20 bg-gray-600 w-full h-[calc(100vh-200px)]"
        >
            <div className="w-full flex items-center justify-between max-w-2xl border-b boder-gray-400 pb-8 mb-10">
                <div className="flex items-center gap-2">
                    <p className="text-blue font-bold text-sm">
                        Tarefas criadas
                    </p>
                    <p
                        className="rounded-full flex items-center justify-center bg-gray-400 w-5 h-5 text-gray-200
                        font-bold text-xs"
                    >
                        0
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-purple font-bold text-sm">
                        Concluídas
                    </p>
                    <p
                        className="rounded-full flex items-center justify-center bg-gray-400 w-5 h-5 text-gray-200
                        font-bold text-xs"
                    >
                        0
                    </p>
                </div>
            </div>

            <div className="text-center text-gray-300">
                <img className="mx-auto" src={emptyImage} alt="Não há item à fazer" />
                <p className="font-bold mt-5">Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </main>
    )
}