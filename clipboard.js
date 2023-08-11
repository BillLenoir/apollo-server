const typeDefs = `#graphql

type Query {
        games: [Game]
    }

    type Game {
        id: String
        title: String
        yearpublished: String
        thumbnail: String
        publisher: String
        description: String
    }
`;

const games = [
    {
        id: '6022',
        title: '13: The Colonies in Revolt',
        yearpublished: '1985',
        thumbnail: 'https://cf.geekdo-images.com/zf4IZ_IaCBIepZUOME2hCg__thumb/img/sxYC_bX6hzaHEcver6vvjMCSBVM=/fit-in/200x150/filters:strip_icc()/pic7211233.png',
        publisher:'Tactical Studies Rules (TSR)','description':'13: The Colonies in Revolt, a Strategic level board-wargame published in 1985 by TSR in their wargaming magazine &quot;Strategy &amp; Tactics&quot; issue#104, is a simulation of the American Revolutionary War from late 1775 (the siege of Boston and the two Canadian expeditions) through the end of 1781. The British player must try to stop the revolt by trying to control half a continent.<br/><br/>Included are a 16 page rulebook, 22&quot;x34&quot; map, 200 counters, and various player charts and tables.<br/><br/>The British player wins in one of two ways. If the year is 1775 or 1776, the British player requires control of a limited number of objectives (Canada, Boston, New York, Philadelphia, Charleston, and one area of operations). If the game continues to 1781, the British player must control New England, the Middle Colonies, the South, and either Canada or the Western Territories. If the British do not attain these objectives, the American player wins.<br/><br/>'
    },
    {
        id:'206150',
        title:'1754: Conquest – The French and Indian War',
        yearpublished:'2017',
        thumbnail:'https://cf.geekdo-images.com/MheZa6k2dJUwZYbuVMUn2A__thumb/img/w_LW0blG7dQ2uRwpeZ8Sps33Q3I=/fit-in/200x150/filters:strip_icc()/pic3281478.jpg',
        publisher:'Academy Games, Inc., ASYNCRON games',
        description:'Description from the publisher:<br/><br/>It is 1754 and both France and Britain have thriving colonies in North America. New England has begun expanding into the Ohio River Valley but France has built a chain of forts extending from Lake Erie to protect their own claim on the land. Now fighting has erupted. France and its Native American Allies control the Ohio Valley but George Washington prepares an army to take it from them. A small war has started in the colonies between France and Britain but control of the world is at stake.<br/><br/>In 1754: Conquest &ndash; The French and Indian War, players play as the French and British Factions who fought for dominance over the Americas. This war is known as the French and Indian War in the United States, the War of Conquest in Canada and was part of the Seven Years War which was fought around the world by the European Powers. The French players either play as the French Canadian Militia or the French Regulars. The British players play as the British Colonial Militias or the British Regulars. Both players can ally and fight with the Native Americans but the French start with more Native Allies.<br/><br/>Players for each side work together in order to coordinate their strategies. To win, each side attempts to control Victory Spaces on the map that represent towns and forts. The militia players receive reinforcements from muster points while the French and English Regulars must ship their reinforcements from overseas. The game ends when the Treaty of Paris is signed and the side controlling the most cities wins the game.<br/><br/>1754 Conquest Introduces:<br/><br/>1. Strategic Forts - Forts allow defenders an opportunity to negate hits in battle!<br/>2. Valuable Muster Points - The new muster system for Native American and Colonial forces makes strategic alliances more dynamic and game changing!<br/>3. Important Harbor Regions - Harbor regions govern regional reinforcements from British and French Regular Troops!<br/><br/>'
    },
    {
        id:'3312',
        title:'1776: The Game of the American Revolutionary War',
        yearpublished:'1974',
        thumbnail:'https://cf.geekdo-images.com/npWrOE1B_7gv6JqAJEIjpQ__thumb/img/xSXhN4wk30xKHcaJIfEBFHHtwM8=/fit-in/200x150/filters:strip_icc()/pic194369.jpg',
        publisher:'The Avalon Hill Game Co',
        description:'1776 is a two-player, turn-based war game played on a hex grid map of the thirteen colonies and Canada.  It is primarily concerned with the military aspects of the American Revolutionary War. There is a basic game, various scenarios with advanced rules and a campaign game.<br/><br/>Avalon Hill Complexity Rating - 7<br/><br/><br/>(from the back of the box:)<br/><br/>The shot heard round the world at Lexington set off more than just another brushfire war in England\'s scattered dominions. It gave birth to a struggling new nation led by a comparative handful of patriots whose refusal to bow before tyranny set the tone for an American heritage preserved from defeat to this very day. But victory did not come cheap. <br/>After showing the British the color of their mettle at Bunker Hill, Washington\'s little army was plagued by one defeat after another, shunting from one battlefield to the next; always beaten but never destroyed. No power of the period believed that the upstart colonials and their unborn nation had the slightest chance of emerging victorious against the strongest military machine of the era after the dismal summer of 1776. But then came the cruelest winter of the decade when even nature seemed to join forces with the British against the tattered American troops. Undaunted, Washington led his small force in the historic crossing of the Delaware to twice surprise and rout British forces at Trenton and Princeton. Their resolve thus strengthened, the ill-clad Americans retired to Valley Forge to face winter beset by the hunger and deprivation that cost the lives of 2500 patriots. But the coming spring found Clinton facing a revitalized and strengthened rebel army which proceeded to chase him across New Jersey in the Monmouth Campaign. Reassured by news of the French alliance and the great American victory at Saratoga that fall, American troops dug in for what they knew would be a long and bitter battle for independence.<br/><br/>6 Games in One Package - Each a Realistic Simulation of the War for Independence...<br/><br/>1776, like all Avalon Hill games, is more than just the standard roll the dice and move game. It is a realistic simulation of the strategic situation faced by British and American alike in that fiery decade when the United States won its independence. <br/>Actually, 1776 is six games in one: a Basic Game that gets you quickly and easily into the routine of simulation gaming; an Advanced Game with scenarios that provides additional complexity and realism; and a Campaign Simulation Game that encompasses the entire war and balances successes in one region against failures in another - truly the ultimate in a simulation gaming experience! <br/>And if you don\'t have the time for a complete Campaign Game, there are four scenarios to choose from; each of which poses a challenge for everyone; from the most erudite of military historians to the fellow who just managed to pass American History:<br/><br/>Scenario 1: The Invasion of Canada - 1775 to 1776 - Can YOU do better than the bumbling General Schuyler and Benedict Arnold in the vain American atttempt to make Canada a 14th colony?<br/><br/>Scenario 2: The Saratoga Campaign - 1777 - Can YOU as General Horatio Gates surround and destroy the forces of the British General Burgoyne in this reinactment of the turning point of the Revolution?<br/><br/>Scenario 3: Greene\'s Southern Campaignv - 1780 to 1781 - Can YOU as General Nathaniel Greene lead Cornwallis\' tested regulars on a merry chase with your force of rag-tag militia and Guerilla bands without being crushed in a major engagement?<br/><br/>Scenario 4: The Yorktown Campaign - 1781 - Can you duplicate Washington\'s encirclement and crushing defeat of Cornwallis in the battle that won the Revolution?<br/><br/>Contents: <br/><br/>     a 16&quot; x 44&quot; four-section, full color mapboard depicting colonial America from Quebec to Georgia; <br/>     two sets of die-cut troop counters representing over 400 units of Continentals, British Regulars, Rebel and Tory Militia, French Regulars, Indians, and naval units of the British and French fleets; <br/>     1 die; <br/>     1 Terrain Effects Chart; <br/>     2 sets (8 per set) of Tactical Combat Cards used in the innovative, new Sustained Combat system; 1 set of scenario, CRT, and play chart cards organized on an index-card format that puts a summary of all levels of the game at your fingertips; <br/>     a 32-page Rules &amp; Designers\' Notes Manual telling you how to play all 6 game versions plus the inside story on research and development and why the game was designed the way it was.<br/><br/><br/>Rated &quot;Tournament Level&quot; on Avalon Hill\'s Simulation-complexity scale.<br/><br/>Note: 1st edition has 416 counters (this includes some blanks)<br/><br/>'
    },
    {
        id:'9093',
        title:'1777: The Year of the Hangman',
        yearpublished:'2002',
        thumbnail:'https://cf.geekdo-images.com/lhx1fmYRU5BdLaKMQSSa6A__thumb/img/4If5CrVn3spYDaRlEvuj7IEp7yQ=/fit-in/200x150/filters:strip_icc()/pic43483.jpg',
        publisher:'Clash of Arms Games',
        description:'Being an Examination of the Philadelphia Campaign of that Year Including a Study of the Ten Crucial Days of 1776 and the Battles of Trenton and Princeton.<br/><br/>&quot;I left Congress on the 11th of November, 1777, that year which the Tories said, had three gallows in it, meaning the three sevens.&quot;<br/>~John Adams<br/><br/>1777: The Year of the Hangman is an operational study of the campaign for Philadelphia. Between September 1st and December 19th two armies contended for the American capital, seat of the rebellion, home to the Congress, and from where independence from Great Britain had been declared only the year before. In this contest battles were fought in Delaware, New Jersey and Pennsylvania. Today roadside placards mark these places: Cooch\'s Bridge, the banks of the Brandywine, The Battle of the Clouds, and Germantown. For 225 years a solemn, common grave has marked the site of the Paoli Massacre. Glory attends the name of Red Bank where the hated Hessian was sent packing, and the fight for Fort Mercer where the Royal Navy suffered its worst defeat of the entire war. Fort Mifflin stands in mute testament to the patriot\'s naked valor; while Valley Forge remains a shrine to his devotion.<br/><br/>Yet all this could have ended on the gallows for Washington and his men, instead of the nation we call the United States of America.<br/><br/>Scale: Two miles per hex. Units: Primarily Brigades and Divisions with a strength point representing roughly 200 men (or 1 regiment). Turns: One day divided into several movement pulses.<br/><br/>Contents: 1 Map (34 x 22&quot;), 1 Counter sheet (280 pieces). 2 Off Board Army Displays, Box, 1 six sided die, Rulebook, including extensive Historical Commentary and a dozen scenarios ranging in length from the entire campaign to simple battle vignettes that last half an hour.<br/><br/>Also includes a study of The Ten Crucial Days of 1776, encompassing the campaigns of Trenton and Princeton and several &quot;what if&quot; scenarios.<br/><br/>'
    },
    {
        id:'4456',
        title:'1862',
        yearpublished:'1990',
        thumbnail:'https://cf.geekdo-images.com/nIdKeAd6QuKzxcEVmGWxKA__thumb/img/RrejiQtFonOAvKGsSrHqhzJlLzg=/fit-in/200x150/filters:strip_icc()/pic6575932.jpg',
        publisher:'Simulation Design, Inc.',
        description:'&quot;1862&quot;, the first wargame in Simulation Design\'s &quot;Battles and Leaders&quot; Series is a system that features four major battles of the Civil War from 1862 and uses rules that are easy and fast to learn allowing you to play a battle in less than three hours. <br/>The system highlights the problems of command and morale.<br/><br/>Each battle has a 17&quot; x 22&quot; game map and there are 400 multicolored counters. <br/>Complexity on a scale of 1-10 is 4.0. It has very good solitaire playability.<br/><br/>The battles are Antietam, Seven Pines, Murfreesboro and Fort Donelson.<br/><br/>'
    },
    {
        id:'333256',
        title:'1914: Fureur à l\'Est',
        yearpublished:'2021',
        thumbnail:'https://cf.geekdo-images.com/TXJLDN3LxymXPBBIX_7lMA__thumb/img/qUGYFsTYclc2YiWDvdTGQ7uitdg=/fit-in/200x150/filters:strip_icc()/pic6375196.png',
        publisher:'Cérigo Editions, Vae Victis',
        description:'Game published in Vae Victis magazine #155<br/><br/>New elegant but simple system (equivalent to 8 pages of rules) which simulates the WW1 campaigns on the East front between August and December 1914).<br/><br/>Players can not always activate all their armies every turn so they have to choose carefully which HQ they will activate.<br/><br/>A game can be completed in 2 hours<br/><br/>'
    }
];

const resolvers = {
    Query: {
        games: () => games,
    },
};