import pystache

TEMPLATE = open("template.html", "r").read()

def generate(file_name):
    content = open(file_name, "r").read()
    output = pystache.render(TEMPLATE, {'content': content})
    open("../" + file_name, "w").write(output)

generate("apple.html")
generate("blue_ant.html")
generate("contact.html")
generate("ear.html")
generate("fashion.html")
generate("index.html")
generate("no_star.html")
generate("portfolio_set.html")
generate("runaway_comma.html")
generate("silver_universe.html")
generate("sweet_nonsense.html")
generate("fancy_restaurant_chapter_one_fruit_platter.html")
