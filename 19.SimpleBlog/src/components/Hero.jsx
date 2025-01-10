export default function Hero() {
    return <div className="flex gap-14 justify-between mt-10 items-center h-72 mb-12">
        <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Hey, I'm Maverick</h2>
            <p className="text-neutral-600 text-sm">This is an ASMR JavaScript React Project number 19 for beginners, which is simple blog app.</p>
        </div>

        <img src="\brain_logo.jpg" alt="Hero Image" className="object-cover w-72 h-72 rounded-md"/>
    </div>
}