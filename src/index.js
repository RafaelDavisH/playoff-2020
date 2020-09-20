const uniqueRandomArray = require('unique-random-array');
const playoffTeams = require('./playoff-2020-teams.json');
const { teams: [{WesternConference, EasternConference}] } = playoffTeams;
const [{
    LosAngelesLakers}, {LosAngelesClippers}, {DenverNuggets}, {HoustonRockets}, {OklahomaCityThunder}, {UtahJazz}, {DallasMavericks}, {PortlandTrailBlazers}] = WesternConference;
const [{MilwaukeeBucks}, {BostonCeltics}, {IndianaPacers}, {MiamiHeat}, {Philadelphia76ers}, {BrooklynNets}, {OrlandoMagic} ] = EasternConference;
const allTeams = [...WesternConference, ...EasternConference];

module.exports = {
    allTeams: allTeams,
    westConf: WesternConference,
    eastConf: EasternConference,
    randomWesternTeam: uniqueRandomArray(WesternConference),
    randomLakersPlayer: uniqueRandomArray(LosAngelesLakers),
    randomClippersPlayer: uniqueRandomArray(LosAngelesClippers),
    randomNuggetsPlayer: uniqueRandomArray(DenverNuggets),
    randomRocketsPlayer: uniqueRandomArray(HoustonRockets),
    randomThunderPlayer: uniqueRandomArray(OklahomaCityThunder),
    randomJazzPlayer: uniqueRandomArray(UtahJazz),
    randomMavericksPlayer: uniqueRandomArray(DallasMavericks),
    randomBlazersPlayer: uniqueRandomArray(PortlandTrailBlazers),
    randomEasternTeam: uniqueRandomArray(EasternConference),
    randomBucksPlayer: uniqueRandomArray(MilwaukeeBucks),
    randomCelticsPlayer: uniqueRandomArray(BostonCeltics),
    randomPacersPlayer: uniqueRandomArray(IndianaPacers),
    randomHeatPlayer: uniqueRandomArray(MiamiHeat),
    random76ersPlayer: uniqueRandomArray(Philadelphia76ers),
    randomMagicPlayer: uniqueRandomArray(OrlandoMagic),
};