const list = '
{
    "metadata": [
        {
            "title": "On Photography",
            "subtitle": null,
            "author1": [
                {
                    "first": "Susan",
                    "middle": null,
                    "last": "Sontag"
                }
            ],
            "year": 1977
        }
    ],
        "tags": [
            "Philosophy/Aesthetics",
            "Art/Art Criticism/Photography",
            "Art/Photography/Photography Criticism",
        ],
            "src": null
}
'

const item = JSON.parse(list);

console.log(item.metadata.author1.first);