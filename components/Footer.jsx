export default function Footer() {
    return (
        <footer className="py-10 mt-10 text-center">
            <p className="text-sm">Made with ❤️ by <a className="hover:underline hover:text-primary" href="https://github.com/pandeyaditya0002">Aditya</a><span className="text-primary">.</span></p>
            <ul className="flex gap-1 items-center justify-center mt-1">
                <li><a className="text-xs bg-secondary hover:bg-primary hover:text-white rounded-full p-1 px-2" href="https://www.instagram.com/pandeyaditya0721/?igsh=eDFtMHBnczUzYWY2" target="_blank">Instagram</a></li>
                <li><a className="text-xs bg-secondary hover:bg-primary hover:text-white rounded-full p-1 px-2" href="https://github.com/pandeyaditya0002" target="_blank">Github</a></li>
            </ul>
        </footer>
    )
}