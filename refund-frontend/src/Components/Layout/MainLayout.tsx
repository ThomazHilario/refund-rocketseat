import { Outlet } from "react-router-dom"

export const MainLayout = () => (
    <main className="flex items-center justify-center my-auto mx-auto p-5">
        <Outlet />
    </main>
)