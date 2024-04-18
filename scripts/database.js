const database = {
    fish: [
        {
            id: 1,
            image: "https://media.istockphoto.com/id/1057678494/photo/guppy-poecilia-reticulata-colorful-rainbow-tropical-aquarium-fish.jpg?s=612x612&w=0&k=20&c=4tUPXfrG_nudlJCDLGPudHPkVYfgtxI22Nm_2H1Ama4=",
            species: "guppy",
            length: "1 inch",
            name: "Harold",
            harvestLocation: "Guppies 'R' Us Pet Store",
            diet: "pellets",
            aside: "Guppies have 4 thumbs!"
        },
        {
            id: 2,
            image: "https://media.istockphoto.com/id/471662364/photo/xenomorph-nightmare.jpg?s=612x612&w=0&k=20&c=2YDtTl5cLiToiKsL3IHXauDtQMuAMbQPyUPGCuaOoaw=",
            species: "xenomorph",
            length: "20 feet",
            name: "Wilhelmina",
            harvestLocation: "Milky Way",
            diet: "living things",
            aside: "Xenomorphs should not be fed at night."
        },
        {
            id: 3,
            image: "https://media.istockphoto.com/id/533130811/photo/great-white-shark-smile.jpg?s=612x612&w=0&k=20&c=JZqG-K0QHExuU2YWFlwLaZFRjZCryE5-lcMfuIpp560=",
            species: "great white shark",
            length: "10 feet",
            name: "Matthew",
            harvestLocation: "Atlantic Ocean",
            diet: "seals",
            aside: "Great White Sharks are amazing gardeners."
        }
    ],

    locations: [
        {
            id: 1,
            location: "Guppies 'R' Us Pet Store",
            dateVisited: "April 1, 2024",
            image: "https://media.istockphoto.com/id/1385106994/photo/variety-of-fish-for-sale-in-a-pet-shop.jpg?s=612x612&w=0&k=20&c=bXty5ModeU0A2vxFCDJG6LPprMdRwdKLQPxJGB4_y6Y=",
            notes: `<p>Topminnow freshwater herring armored searobin, airsac catfish three spot gourami lake trout bristlemouth ocean perch yellow-eye mullet. Sand eel Atlantic trout mudfish delta smelt; Pacific herring ocean sunfish yellowhead jawfish dealfish. Freshwater shark brook lamprey; arrowtooth eel Australasian salmon. Loach catfish spotted dogfish false cat shark southern grayling creek chub whale shark--whale catfish rudderfish. Lionfish airbreathing catfish giant gourami blue catfish rudd candiru koi spadefish trunkfish, redlip blenny garpike! Hagfish common tunny mackerel shark; Australasian salmon New Zealand smelt Black scalyfin surfperch, starry flounder.</p>
            <p>Sockeye salmon, blacktip reef shark anglerfish ridgehead goblin shark. Sawtooth eel bluntnose minnow, "eel-goby sillago longnose sucker, Black sea bass coelacanth telescopefish treefish cookie-cutter shark kanyu." Sailfin silverside, mustache triggerfish antenna codlet halfmoon spikefish stickleback. Bichir leopard danio giant wels, lake whitefish--oilfish Australasian salmon silver hake bala shark zebra loach muskellunge sea catfish. Bristlemouth salmon, long-finned pike sharksucker, giant sea bass Black prickleback pencilfish coelacanth chain pickerel, yellow jack! Skipping goby beluga sturgeon grideye tapetail barb canary rockfish yellowfin cutthroat trout flying gurnard.</p>
            <p>Boafish sprat: whiting marblefish saury. Mackerel shark horsefish daggertooth pike conger; prickleback wolf-herring, alewife redtooth triggerfish; lookdown catfish pollyfish. Rudderfish gar denticle herring. Peamouth rockweed gunnel daggertooth pike conger northern lampfish, skipping goby jackfish fingerfish freshwater shark lefteye flounder rockling." Cookie-cutter shark, pricklefish Cornish Spaktailed Bream vendace batfish goldeye, whalefish weeverfish.</p>`

        },
        {
            id: 2,
            location: "Milky Way",
            dateVisited: "February 22, 2024",
            image: "https://media.istockphoto.com/id/1085287936/photo/milky-way.jpg?s=612x612&w=0&k=20&c=cSnObab7Tv5r2WOhJ7glRiLZ7RlZo6Ar29q3ULdrlmI=",
            notes: `<p>Candlefish slender mola pike characid pelagic cod tuna trout false brotula dragon goby louvar. Crestfish yellowtail horse mackerel sauger round herring waryfish collared dogfish seatrout kappy, Port Jackson shark. Sole; burbot requiem shark yellow bass; atka mackerel gianttail kingfish spinefoot tidewater goby threadsail shortnose greeneye. Yellowfin grouper Bengal danio Long-finned sand diver tope rough sculpin glass knifefish. Pacific salmon, Cherubfish ide." Crocodile shark freshwater shark, long-whiskered catfish devil ray: molly: ricefish Arctic char. Blue-redstripe danio cutthroat eel tope woody sculpin Atlantic cod. Death Valley pupfish danio pompano striped bass. Tope European chub blacktip reef shark mail-cheeked fish. Summer flounder hillstream loach, slickhead: walking catfish wolffish tube-snout, "tripletail archerfish climbing catfish," muskellunge.</p>
            <p>Driftfish sea toad sandburrower poacher freshwater eel Devario flyingfish Raccoon butterfly fish Modoc sucker, ziege pipefish golden dojo. Flounder Redfish longjaw mudsucker pricklefish salamanderfish crocodile shark whiff threadfin tuna hamlet brook trout chubsucker: loosejaw eelblenny sailfish crocodile icefish icefish great white shark?</p>
            <p>Giant sea bass herring, slender snipe eel European minnow, snake mackerel rocket danio. Mooneye trout-perch trumpeter Red salmon. Black tetra cavefish northern Stargazer, zebra bullhead shark merluccid hake. Barfish Australian herring Celebes rainbowfish Asian carps spikefish Celebes rainbowfish giant gourami yellowtail clownfish. Wobbegong freshwater shark northern sea robin flabby whalefish snubnose eel spookfish, grunt sculpin, "sheepshead minnow mola humuhumunukunukuapua'a sailback scorpionfish stingray bluntnose knifefish." Oregon chub swordtail bonito skilfish jellynose fish halosaur wolffish duckbill catla white shark zebra oto. Rockweed gunnel elephantnose fish, alfonsino pickerel dragonfish, burbot dealfish mola longfin smelt tompot blenny flier boarfish. Southern sandfish, halibut barbelless catfish glass knifefish boga eulachon frogfish pikehead whalefish minnow. Surf sardine footballfish mummichog round stingray; eucla cod yellowfin pike sea bream blue danio zebra bullhead shark. Blind shark pikeperch spinyfin false cat shark longjaw mudsucker galjoen fish zebra bullhead shark.</p>`
        },
        {
            id: 3,
            location: "Atlantic Ocean",
            dateVisited: "March 3, 2024",
            image: "https://www.shutterstock.com/image-photo/artistic-underwater-photo-waves-scuba-600nw-1928732996.jpg",
            notes: `<p>Yellowtail kingfish: ricefish Mexican golden trout antenna codlet yellow weaver chum salmon Atlantic saury. Scaly dragonfish, snoek Dolly Varden trout spinefoot beaked sandfish goblin shark. Trevally dab pollyfish escolar trunkfish northern lampfish Bitterling snook hairtail longfin escolar brotula weasel shark mahseer wolf-eel, Red salmon. Fierasfer bamboo shark, sea bass dragonfish--nurse shark, longneck eel temperate ocean-bass northern Stargazer beaked sandfish, powen. Barbeled houndshark Blind goby prickly shark long-whiskered catfish wolffish blue whiting zebra shark pollock sweeper, snake eel boarfish Rabbitfish Ganges shark. Southern flounder telescopefish brown trout collared carpetshark bigeye silver hake southern grayling skipjack tuna. Pike javelin pink salmon crevice kelpfish codlet freshwater eel dace red velvetfish; prickleback madtom Blind goby silver carp roundhead carp scaly dragonfish.</p>
            <p>Topminnow freshwater herring armored searobin, airsac catfish three spot gourami lake trout bristlemouth ocean perch yellow-eye mullet. Sand eel Atlantic trout mudfish delta smelt; Pacific herring ocean sunfish yellowhead jawfish dealfish. Freshwater shark brook lamprey; arrowtooth eel Australasian salmon. Loach catfish spotted dogfish false cat shark southern grayling creek chub whale shark--whale catfish rudderfish. Lionfish airbreathing catfish giant gourami blue catfish rudd candiru koi spadefish trunkfish, redlip blenny garpike! Hagfish common tunny mackerel shark; Australasian salmon New Zealand smelt Black scalyfin surfperch, starry flounder.</p>
            <p>Humuhumunukunukuapua'a electric stargazer roanoke bass temperate bass: stonefish, trumpeter, "Black prickleback crevice kelpfish arowana." Mexican blind cavefish mud minnow. Greeneye barbeled houndshark, swordfish saury cobia jewelfish; European flounder; louvar, Molly Miller bonefish.</p>`
        }
    ],

    tips: [
        {
            id: 1,
            tip: `"Don't dive too deep!"`
        },
        {
            id: 2,
            tip: `"Be curious!"`
        },
        {
            id: 3,
            tip: `"Fish are friends, not food."`
        }
    ]
}

export const getFishes = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}