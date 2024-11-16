"use client"

type errorType = {
    error: Error,
    reset: () => void
}
export default function ErrorPage({ error, reset }: errorType) {
    return (
        <main>
            <p>An error occurred:</p>
            {error?.message}
            <button className="bg-blue-500 text-white px-4 py-2">
                Try again
            </button>
            <button className=" bg-red-500 text-white px-4 py-2" onClick={() => reset()}>
                Go to Homepage
            </button>
        </main>
    )
}