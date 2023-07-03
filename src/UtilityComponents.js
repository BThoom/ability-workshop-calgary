function Throw404() {
    throw new Response("", { status: 404, statusText: "Not Found" });
}

export { Throw404 };