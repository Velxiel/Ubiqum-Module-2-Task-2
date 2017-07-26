// A var named 'statistics' is created
// It contains an object, that can be used for the calculations later
var statistics = {
  no_of_reps: {
    "Number_of_Republicans": 0,
    "Number_of_Democrats": 0,
    "Number_of_Independents": 0,
    "Total": 0
  },
  percentage_of_voted_parties: {
    "Pecentage_of_Republicans": 0,
    "Pecentage_of_Democrats": 0,
    "Pecentage_of_Independents": 0,
    "Total": 0 + "%"
  },
  no_of_missed_votes: {
    "Missed_Votes_of_Republicans": 0,
    "Missed_Votes_of_Democrats": 0,
    "Missed_Votes_of_Independents": 0,
    "Total": 0
  },
  no_of_votes_with_party_pct: {
    "Votes_With_Party_PCT_of_Republicans": 0,
    "Votes_With_Party_PCT_of_Republicans": 0,
    "Votes_With_Party_PCT_of_Republicans": 0,
    "Total": 0
  }

};

$(document).ready ( function() {
// ----------------------------------------------------------------------------- All the data of the 'statistics'
// Different *var*s are being created in order to count the number of each Party
var numberOfRepublicans = 0;
var numberOfDemocrats = 0;
var numberOfIndependents = 0;
// And the total number of them
var totalNumberOfRepresentatives = 0;

// Different *var*s are being created in order to count the number of 'missed votes' of each Party
var missedVotesOfRepublicans = 0;
var missedVotesOfDemocrats = 0;
var missedVotesOfIndependents = 0;
// And the total number of them
var totalNumberOfMissedVotes = 0;

// Different *var*s are being created in order to count the number of 'missed votes' of each Party
var pctOfVotesWithPartyOfRepublicans = 0;
var pctOfVotesWithPartyOfDemocrats = 0;
var pctOfVotesWithPartyOfIndependents = 0;
// And the total number of them
var totalNumberOfPercentageOfVotesWithParty = 0;


// Takes the data from the JSON object
var members = data.results[0].members;

// ----------------------------------------------------------------------------- For Senate - Attendance

// CALCULATING THE VALUES OF THE JavaScript Object LIST FROM THE 'Senate JSON'**********************************
// The creation of the loop through the JSON list is needed for the calculations about the info above
for (var i = 0; i < members.length; i++) {

  // For each 'member' of the list
  var member = members[i];

  // Pointing the path that JS needs to follow in order to access the needed info
  var missedVotes = member.missed_votes;

  // Pointing the path that JS needs to follow in order to access the needed info
  var totalVotes = member.total_votes;

  // Pointing the path that JS needs to follow in order to access the needed info
  var votesWithPartyPCT = member.votes_with_party_pct;

  // Because this info is a string with a number inside, a function is neccesary
  // This function is called *parseInt()* and it can turn any number inside a string an actual number
  missedVotes = parseInt(missedVotes);

  // Because this info is a string with a number inside, a function is neccesary
  // This function is called *parseInt()* and it can turn any number inside a string an actual number
  totalVotes = parseFloat(totalVotes);

  // Because this info is a string with a number inside, a function is neccesary
  // This function is called *parseFloat()* and it can turn any number inside a string an actual number
  votesWithPartyPCT = parseFloat(votesWithPartyPCT);

  // Checking the value of the 'Party-Member' in the JSON list
  if (member.party == "R") {
    numberOfRepublicans++;
    missedVotesOfRepublicans = missedVotesOfRepublicans + missedVotes;
    pctOfVotesWithPartyOfRepublicans = parseFloat(pctOfVotesWithPartyOfRepublicans + votesWithPartyPCT);


  } else if (member.party == "D") {
    numberOfDemocrats = numberOfDemocrats + 1;
    missedVotesOfDemocrats = missedVotesOfDemocrats + missedVotes;
    pctOfVotesWithPartyOfDemocrats = parseFloat(pctOfVotesWithPartyOfDemocrats + votesWithPartyPCT);

  } else {
    numberOfIndependents++;
    missedVotesOfIndependents = missedVotesOfIndependents + missedVotes;
    pctOfVotesWithPartyOfIndependents = parseFloat(pctOfVotesWithPartyOfIndependents + votesWithPartyPCT);

  }
  // The total number of list members is being calculated here
  totalNumberOfRepresentatives++;
}
// And just for security, another way of calculating the total can be created
// var totalNumberOfRepresentatives = numberOfRepublicans + numberOfDemocrats + numberOfIndependents;

// And a total of 'Missed Votes' should be calculated
totalNumberOfMissedVotes = missedVotesOfRepublicans + missedVotesOfDemocrats + missedVotesOfIndependents;


// ASSIGNING THE NEW VALUES TO THE JavaScript Object LIST*********************************************************
// And here the new property of the 'Statistics'-JS are being assigned to the file
console.log(statistics);

statistics.no_of_reps["Number_of_Republicans"] = numberOfRepublicans;
console.log(numberOfRepublicans);

statistics.no_of_reps["Number_of_Democrats"] = numberOfDemocrats;
console.log(numberOfDemocrats);

statistics.no_of_reps["Number_of_Independents"] = numberOfIndependents;
console.log(numberOfIndependents);

statistics.no_of_reps["Total"] = totalNumberOfRepresentatives;
console.log(totalNumberOfRepresentatives);

statistics.no_of_missed_votes["Missed_Votes_of_Republicans"] = missedVotesOfRepublicans;;
console.log(missedVotesOfRepublicans);

statistics.no_of_missed_votes["Missed_Votes_of_Democrats"] = missedVotesOfDemocrats;
console.log(missedVotesOfDemocrats);

statistics.no_of_missed_votes["Missed_Votes_of_Independents"] = missedVotesOfIndependents;
console.log(missedVotesOfIndependents);

statistics.no_of_missed_votes["Total"] = totalNumberOfMissedVotes;
console.log(totalNumberOfMissedVotes);


// Here an average of the each Party's array of data is being calculated
var averagePercentageOfRepublicans = 100 * numberOfRepublicans / totalNumberOfRepresentatives;
console.log(averagePercentageOfRepublicans + " %");

var averagePercentageOfDemocrats = 100 * numberOfDemocrats / totalNumberOfRepresentatives;
console.log(averagePercentageOfDemocrats + " %");

var averagePercentageOfIndependents = 100 * numberOfIndependents / totalNumberOfRepresentatives;
console.log(averagePercentageOfIndependents + " %");

var totalPercentageOfRepresentatives = 100 * totalNumberOfRepresentatives / totalNumberOfRepresentatives;
console.log(totalPercentageOfRepresentatives + " %");


// And here the new property of the 'Statistics'-JS are being assigned to the file
statistics.percentage_of_voted_parties["Pecentage_of_Republicans"] = averagePercentageOfRepublicans;
console.log(averagePercentageOfRepublicans);

statistics.percentage_of_voted_parties["Pecentage_of_Democrats"] = averagePercentageOfDemocrats;
console.log(averagePercentageOfDemocrats);

statistics.percentage_of_voted_parties["Pecentage_of_Independents"] = averagePercentageOfIndependents;
console.log(averagePercentageOfIndependents);

statistics.percentage_of_voted_parties["Total"] = totalPercentageOfRepresentatives;
console.log(totalPercentageOfRepresentatives);

// Creation of a Sorted Array
// So that all the 'members' can be accessed from this function with the parameters 'x' & 'y'
var sortedArray = members.sort(function(x, y) {

  // This loop checks EVERY element inside the array
  // Checks which of the 2 numbers (x & y) with the value 'votes_with_party_pct'
  if (x.votes_with_party_pct < y.votes_with_party_pct) {
    // If the first is smaller than the latter, then we order it not to do anything
    return -1;
    // This -1 means practicaly "Don't do anything!!"
  } else {
    return 1;
    // This 1 means practicaly "Do something!!"
    // There is also 0, that says "Leave everything as it is!!"
  }
});

console.log(sortedArray);

// Counting the 'ten percent' of the JSON total
var tenPercent = Math.round(members.length * (0.1));
console.log(tenPercent);

// For the 'Least Loyal'^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
for (var i = 0; i < tenPercent; i++) {
  var member = members[i];

  // To find the number of votes for each of the members shown in the TOP and BOTTOM positions, this calculation
  var numberOfVotes = parseInt(member.total_votes) * parseFloat(member.votes_with_party_pct) / 100;
  numberOfVotes = parseInt(numberOfVotes);

  // I create this variable to make my code look more tidy and clean
  var name = member.first_name + ' ' + (member.middle_name || "") + ' ' + member.last_name;
  console.log(name);

  // Show percentage
  var percentageOfLeastLoyal = member.votes_with_party_pct + " %";
  console.log(percentageOfLeastLoyal);

var partyMemberNumber = i + 1;
  // Appending to the Table
  var tr_leastLoyal = '<tr>';
  tr_leastLoyal += '<td>' + partyMemberNumber + '</td>';
  tr_leastLoyal += '<td>' + name + '</td>';
  tr_leastLoyal += '<td>' + numberOfVotes + '</td>';
  tr_leastLoyal += '<td>' + percentageOfLeastLoyal + '</td>';
  tr_leastLoyal += '</tr>';
  $('.Least-Loyal').append(tr_leastLoyal);

// To find the last member of the 10 Percent
  var lastListItem = member[tenPercent];
}
for (var i = tenPercent + 1; i < members.length; i++) {
  var member = members[i];

  if (member === lastListItem) {
    var extrapercentageOfLeastLoyal = member.votes_with_party_pct + "%";
    console.log(extrapercentageOfLeastLoyal);

    // Appending to the Table
    var tr_leastLoyal = '<tr>';
    tr_leastLoyal += '<td>' + partyMemberNumber + '</td>';
    tr_leastLoyal += '<td>' + name + '</td>';
    tr_leastLoyal += '<td>' + numberOfVotes + '</td>';
    tr_leastLoyal += '<td>' + percentageOfLeastLoyal + '</td>';
    tr_leastLoyal += '</tr>';
    $('.Least-Loyal').append(tr_leastLoyal);
  }

}

// For the 'Most Loyal'^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// First reverse the sorted array from before
sortedArray.reverse();
for (var i = 0; i < tenPercent; i++) {
  var member = members[i];

  // To find the number of votes for each of the members shown in the TOP and BOTTOM positions, this calculation
  var numberOfVotes = parseInt(member.total_votes) * parseFloat(member.votes_with_party_pct) / 100;
  numberOfVotes = parseInt(numberOfVotes);

  // I create this variable to make my code look more tidy and clean
  var name = member.first_name + ' ' + (member.middle_name || "") + ' ' + member.last_name;
  console.log(name);

  // Show percentage
  var percentageOfMostLoyal = member.votes_with_party_pct + " %";
  console.log(percentageOfMostLoyal);

var partyMemberNumber = i + 1;
    // Appending to the Table
    var tr_mostLoyal = '<tr>';
    tr_mostLoyal += '<td>' + partyMemberNumber + '</td>';
    tr_mostLoyal += '<td>' + name + '</td>';
    tr_mostLoyal += '<td>' + numberOfVotes + '</td>';
    tr_mostLoyal += '<td>' + percentageOfMostLoyal + '</td>';
    tr_mostLoyal += '</tr>';
    $('.Most-Loyal').append(tr_mostLoyal);

// To find the last member of the 10 Percent
  var lastListItem = member[tenPercent];
}
for (var i = tenPercent + 1; i < members.length; i++) {
  var member = members[i];

  if (member === lastListItem) {
    var extraPercentageOfMostLoyal = member.votes_with_party_pct + "%";
    console.log(extraPercentageOfMostLoyal);
    // Appending to the Table
    var tr_mostLoyal = '<tr>';
    tr_mostLoyal += '<td>' + partyMemberNumber + '</td>';
    tr_mostLoyal += '<td>' + name + '</td>';
    tr_mostLoyal += '<td>' + numberOfVotes + '</td>';
    tr_mostLoyal += '<td>' + percentageOfMostLoyal + '</td>';
    tr_mostLoyal += '</tr>';
    $('.Most-Loyal').append(tr_mostLoyal);
  }

}

var totalPCTOfRepublicans = (pctOfVotesWithPartyOfRepublicans / numberOfRepublicans).toFixed(2);
var totalPCTOfDemocrats = (pctOfVotesWithPartyOfDemocrats / numberOfDemocrats).toFixed(2);
var totalPCTOfIndependents = (pctOfVotesWithPartyOfIndependents / numberOfIndependents).toFixed(2);

// Appending to the Table-Row
$('.Republican-Data').append('<td>' + numberOfRepublicans + '</td>');
$('.Republican-Data').append('<td>' + totalPCTOfRepublicans + " " + "%" + '</td>');

$('.Democrat-Data').append('<td>' + numberOfDemocrats + '</td>');
$('.Democrat-Data').append('<td>' + totalPCTOfDemocrats + " " + "%" + '</td>');

$('.Independent-Data').append('<td>' + numberOfIndependents + '</td>');
$('.Independent-Data').append('<td>' + totalPCTOfIndependents + " " + "%" + '</td>');

$('.SumOfRepresentatives').append('<td>' + totalNumberOfRepresentatives + '</td>');


// Creation of a Sorted Array
// So that all the 'members' can be accessed from this function with the parameters 'x' & 'y'
var sortedArray = members.sort(function(x, y) {

  // This loop checks EVERY element inside the array
  // Checks which of the 2 numbers (x & y) with the value 'votes_with_party_pct'
  if (x.missed_votes_pct > y.missed_votes_pct) {
    // If the first is smaller than the latter, then we order it not to do anything
    return -1;
    // This -1 means practicaly "Don't do anything!!"
  } else {
    return 1;
    // This 1 means practicaly "Do something!!"
    // There is also 0, that says "Leave everything as it is!!"
  }
});
// For the 'Least Engaged'^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
for (var i = 0; i < tenPercent; i++) {
  var member = members[i];

  // To find the number of votes for each of the members shown in the TOP and BOTTOM positions, this calculation
  var numberOfMissedVotes = parseInt(member.missed_votes) * parseFloat(member.missed_votes_pct) / 100;
  numberOfMissedVotes = parseInt(numberOfMissedVotes);

  // I create this variable to make my code look more tidy and clean
  var name = member.first_name + ' ' + (member.middle_name || "") + ' ' + member.last_name;
  console.log(name);

  // Show percentage
  var percentageOfLeastEngaged = member.missed_votes_pct + " %";
  console.log(percentageOfLeastEngaged);

var partyMemberNumber = i + 1;
  // Appending to the Table
  var tr_leastEngaged = '<tr>';
  tr_leastEngaged += '<td>' + partyMemberNumber + '</td>';
  tr_leastEngaged += '<td>' + name + '</td>';
  tr_leastEngaged += '<td>' + numberOfMissedVotes + '</td>';
  tr_leastEngaged += '<td>' + percentageOfLeastEngaged + '</td>';
  tr_leastEngaged += '</tr>';
  $('.Least-Engaged').append(tr_leastEngaged);

// To find the last member of the 10 Percent
  var lastListItem = member[tenPercent];
}
for (var i = tenPercent + 1; i < members.length; i++) {
  var member = members[i];

  if (member === lastListItem) {
    var extrapercentageOfLeastEngaged = member.votes_with_party_pct + "%";
    console.log(extrapercentageOfLeastEngaged);

    // Appending to the Table
    var tr_leastEngaged = '<tr>';
    tr_leastEngaged += '<td>' + partyMemberNumber + '</td>';
    tr_leastEngaged += '<td>' + name + '</td>';
    tr_leastEngaged += '<td>' + numberOfMissedVotes + '</td>';
    tr_leastEngaged += '<td>' + percentageOfLeastEngaged + '</td>';
    tr_leastEngaged += '</tr>';
    $('.Least-Engaged').append(tr_leastEngaged);
  }

}

// For the 'Most Engaged'^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// First reverse the sorted array from before
sortedArray.reverse();

for (var i = 0; i < tenPercent; i++) {
  var member = members[i];

  // To find the number of votes for each of the members shown in the TOP and BOTTOM positions, this calculation
  var numberOfMissedVotes = parseInt(member.missed_votes) * parseFloat(member.missed_votes_pct) / 100;
  numberOfMissedVotes = parseInt(numberOfMissedVotes);

  // I create this variable to make my code look more tidy and clean
  var name = member.first_name + ' ' + (member.middle_name || "") + ' ' + member.last_name;
  console.log(name);

  // Show percentage
  var percentageOfMostEngaged = member.missed_votes_pct + " %";
  console.log(percentageOfMostEngaged);

var partyMemberNumber = i + 1;
  // Appending to the Table
  var tr_mostEngaged = '<tr>';
  tr_mostEngaged += '<td>' + partyMemberNumber + '</td>';
  tr_mostEngaged += '<td>' + name + '</td>';
  tr_mostEngaged += '<td>' + numberOfMissedVotes + '</td>';
  tr_mostEngaged += '<td>' + percentageOfMostEngaged + '</td>';
  tr_mostEngaged += '</tr>';
  $('.Most-Engaged').append(tr_mostEngaged);

// To find the last member of the 10 Percent
  var lastListItem = member[tenPercent];
}
for (var i = tenPercent + 1; i < members.length; i++) {
  var member = members[i];

  if (member === lastListItem) {
    var extrapercentageOfMostEngaged = member.votes_with_party_pct + "%";
    console.log(extrapercentageOfMostEngaged);

    // Appending to the Table
    var tr_mostEngaged = '<tr>';
    tr_mostEngaged += '<td>' + partyMemberNumber + '</td>';
    tr_mostEngaged += '<td>' + name + '</td>';
    tr_mostEngaged += '<td>' + numberOfMissedVotes + '</td>';
    tr_mostEngaged += '<td>' + percentageOfMostEngaged + '</td>';
    tr_mostEngaged += '</tr>';
    $('.Most-Engaged').append(tr_mostEngaged);
  }

}

var totalPCTOfRepublicans = (pctOfVotesWithPartyOfRepublicans / numberOfRepublicans).toFixed(2);
var totalPCTOfDemocrats = (pctOfVotesWithPartyOfDemocrats / numberOfDemocrats).toFixed(2);
var totalPCTOfIndependents = (pctOfVotesWithPartyOfIndependents / numberOfIndependents).toFixed(2);


// And just for security, another way of calculating the total can be created
// var totalNumberOfRepresentatives = numberOfRepublicans + numberOfDemocrats + numberOfIndependents;

// And a total of 'Missed Votes' should be calculated
totalNumberOfvotesWithPartyPCT = pctOfVotesWithPartyOfRepublicans + pctOfVotesWithPartyOfDemocrats + pctOfVotesWithPartyOfIndependents;

// #####################################################################################################################################
// Calculating the percentage of Loyalty

// ASSIGNING THE NEW VALUES TO THE JavaScript Object LIST*********************************************************
// And here the new property of the 'Statistics'-JS are being assigned to the file

statistics.no_of_votes_with_party_pct["Votes_With_Party_PCT_of_Republicans"] = pctOfVotesWithPartyOfRepublicans;;
console.log(pctOfVotesWithPartyOfRepublicans);

statistics.no_of_votes_with_party_pct["Votes_With_Party_PCT_of_Democrats"] = pctOfVotesWithPartyOfDemocrats;
console.log(pctOfVotesWithPartyOfDemocrats);

statistics.no_of_votes_with_party_pct["Votes_With_Party_PCT_of_Independents"] = pctOfVotesWithPartyOfIndependents;
console.log(pctOfVotesWithPartyOfIndependents);

statistics.no_of_votes_with_party_pct["Total"] = totalNumberOfvotesWithPartyPCT;
console.log(totalNumberOfvotesWithPartyPCT);
}
)
