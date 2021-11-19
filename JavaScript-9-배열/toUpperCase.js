function get_members() {
  return ['Park', 'Austin', 'Katie', 'Jason'];
}

members = get_members();


for(var i =0; i < members.length; i++) {
  document.write(members[i].toUpperCase()+"<br />"); 
}

