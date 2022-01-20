export const trending = (req, res) => res.send("Home page videos");
export const watch = (req, res) => {
    console.log(req.params);
    res.send(`Watch ${req.params.id}`);
}
export const edit = (req, res) => res.send("Edit Video");
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const remove = (req, res) => res.send("Delete Video");