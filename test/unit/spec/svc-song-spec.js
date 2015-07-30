'use strict';

describe('Service: songService', function() {
	var $httpBackend, songService, scope, songList;

	beforeEach(function() {
		module('angularAdminApp');
		songList = [{"artist": "The Fray", "id": 7059, "title": "How To Save A Life"}, {"artist": "The Jackson 5", "id": 7062, "title": "I Want You Back"}, {"artist": "Willie Nelson", "id": 7067, "title": "On The Road Again (Full Version)"}, {"artist": "A-HA", "id": 9187, "title": "Take On Me"}, {"artist": "Akon", "id": 9212, "title": "Right Now (Na Na Na)"}, {"artist": "Alicia Keys", "id": 9220, "title": "Like You'll Never See Me Again"}, {"artist": "Blink 182", "id": 9230, "title": "Adam's Song"}, {"artist": "Boys Like Girls", "id": 9242, "title": "Hero/Heroine"}, {"artist": "Amy Winehouse", "id": 9514, "title": "You Know I'm No Good (Sample version)"}, {"artist": "Brooks & Dunn", "id": 9515, "title": "Boot Scootin' Boogie"}, {"artist": "Culture Club - 2005 Remix", "id": 9517, "title": "Do You Really Want To Hurt Me?"}, {"artist": "Culture Club", "id": 9519, "title": "I'll Tumble 4 Ya"}, {"artist": "Cyndi Lauper", "id": 9520, "title": "Girls Just Wanna Have Fun"}, {"artist": "Cyndi Lauper", "id": 9521, "title": "True Colors"}, {"artist": "Dean Martin", "id": 9522, "title": "Memories Are Made Of This"}, {"artist": "Elvis Presley", "id": 9526, "title": "Heartbreak Hotel"}, {"artist": "Alan Jackson", "id": 10192, "title": "Small Town Southern Man"}, {"artist": "Blink 182", "id": 10202, "title": "First Date"}, {"artist": "Carly Simon", "id": 10486, "title": "Nobody Does It Better"}, {"artist": "Cheap Trick", "id": 10487, "title": "I Want You To Want Me"}, {"artist": "Dusty Springfield", "id": 10491, "title": "Son-Of-A Preacher Man"}, {"artist": "Edwin McCain", "id": 10492, "title": "I'll Be"}, {"artist": "Etta James", "id": 10690, "title": "At Last"}, {"artist": "Faith Hill", "id": 10691, "title": "That's How Love Moves"}, {"artist": "Fall Out Boy", "id": 10692, "title": "Thnks Fr Th Mmrs"}, {"artist": "Goo Goo Dolls", "id": 10700, "title": "Iris"}, {"artist": "Indigo Girls", "id": 10701, "title": "Closer To Fine"}, {"artist": "James Taylor", "id": 10702, "title": "How Sweet It Is (To Be Loved By You)"}, {"artist": "Jay-Z", "id": 10703, "title": "Excuse Me Miss (Radio Version)"}, {"artist": "Alicia Keys", "id": 10764, "title": "Fallin' (Radio Version)"}, {"artist": "Kansas", "id": 10765, "title": "Carry On Wayward Son"}, {"artist": "Kanye West", "id": 10766, "title": "Diamonds From Sierra Leone"}, {"artist": "Kelly Clarkson", "id": 10767, "title": "Thankful"}, {"artist": "Madonna", "id": 10788, "title": "Like A Virgin"}, {"artist": "Martha & The Vandellas", "id": 10789, "title": "Dancing In The Street"}, {"artist": "Marvin Gaye", "id": 10851, "title": "What's Going On"}, {"artist": "Mary J. Blige", "id": 10852, "title": "No More Drama"}, {"artist": "Michael Jackson", "id": 10853, "title": "Ben"}, {"artist": "Nat King Cole", "id": 10854, "title": "L-O-V-E"}, {"artist": "Norah Jones", "id": 10855, "title": "Don't Know Why"}, {"artist": "Panic! At The Disco", "id": 10856, "title": "I Write Sins Not Tragedies"}, {"artist": "Pat Benatar", "id": 10857, "title": "Hit Me With Your Best Shot"}, {"artist": "Patsy Cline", "id": 10859, "title": "Crazy"}, {"artist": "Ritchie Valens", "id": 10877, "title": "Donna"}, {"artist": "Sara Bareilles", "id": 10879, "title": "Love Song"}, {"artist": "Squeeze", "id": 10881, "title": "Tempted"}, {"artist": "Tanya Tucker", "id": 10882, "title": "Delta Dawn"}, {"artist": "The B-52's", "id": 10883, "title": "Love Shack"}, {"artist": "The Commodores", "id": 10884, "title": "Brick House"}, {"artist": "The Commodores", "id": 10885, "title": "Easy"}, {"artist": "The Jackson 5", "id": 10886, "title": "ABC (Full version)"}, {"artist": "The Jackson 5", "id": 10887, "title": "ABC (Sample version)"}, {"artist": "The Miracles", "id": 10888, "title": "The Tracks Of My Tears"}, {"artist": "Tom Jones", "id": 10892, "title": "What's New Pussycat?"}, {"artist": "Trace Adkins", "id": 10893, "title": "Honkytonk Badonkadonk"}, {"artist": "Willie Nelson", "id": 10894, "title": "Always On My Mind"}, {"artist": "Amy Winehouse", "id": 11001, "title": "You Know I'm No Good (Full version)"}, {"artist": "Elvis Presley", "id": 14118, "title": "Suspicious Minds"}, {"artist": "Fall Out Boy", "id": 14119, "title": "Dance, Dance"}, {"artist": "Fall Out Boy", "id": 14120, "title": "This Ain't A Scene Its An Arms Race"}, {"artist": "George Strait", "id": 14126, "title": "All My Ex's Live In Texas"}, {"artist": "Janet Jackson", "id": 14127, "title": "What Have You Done For Me Lately"}, {"artist": "Janis Joplin", "id": 14128, "title": "Me And Bobby McGee"}, {"artist": "Jay-Z", "id": 14129, "title": "Change Clothes"}, {"artist": "Alicia Keys", "id": 14190, "title": "If I Ain't Got You"}, {"artist": "Four Tops", "id": 14191, "title": "I Can't Help Myself (Sample version)"}, {"artist": "Frank Sinatra", "id": 14192, "title": "New York, New York"}, {"artist": "K.T. Tunstall", "id": 14193, "title": "Suddenly I See"}, {"artist": "KC And The Sunshine Band", "id": 14196, "title": "That's The Way (I Like It)"}, {"artist": "Keith Urban", "id": 14197, "title": "Making Memories Of Us"}, {"artist": "Kelly Clarkson", "id": 14198, "title": "Low"}, {"artist": "Madonna", "id": 14216, "title": "Material Girl"}, {"artist": "Marvin Gaye", "id": 14217, "title": "I Heard It Through The Grapevine"}, {"artist": "Marvin Gaye", "id": 14218, "title": "Let's Get It On"}, {"artist": "Nelly Furtado", "id": 14294, "title": "I'm Like A Bird"}, {"artist": "Nelly Furtado", "id": 14295, "title": "Turn Off The Light"}, {"artist": "Peter, Bjorn and John", "id": 14297, "title": "Young Folks"}, {"artist": "Pink", "id": 14319, "title": "Don't Let Me Get Me"}, {"artist": "Rick James", "id": 14320, "title": "Super Freak"}, {"artist": "Roger Miller", "id": 14323, "title": "King Of The Road"}, {"artist": "Tammy Wynette", "id": 14325, "title": "Stand By Your Man"}, {"artist": "The Kinks", "id": 14326, "title": "All Day and All of the Night"}, {"artist": "The Monkees", "id": 14327, "title": "Daydream Believer"}, {"artist": "The Partridge Family", "id": 14328, "title": "I Think I Love You"}, {"artist": "The Supremes", "id": 14329, "title": "Baby Love"}, {"artist": "Wayne Newton", "id": 14331, "title": "Danke Schoen"}, {"artist": "Winger", "id": 14332, "title": "Seventeen"}, {"artist": "Willie Nelson", "id": 14333, "title": "On The Road Again (Sample version)"}, {"artist": "Babi Floyd", "id": 26017, "title": "Do Your Ears Hang Low"}, {"artist": "Louise Taylor", "id": 26018, "title": "Mary Had A Little Lamb"}, {"artist": "Lisa McCormick", "id": 26022, "title": "I'm A Little Teapot"}, {"artist": "Sean Altman", "id": 26023, "title": "The Wheels On The Bus"}, {"artist": "The Old School", "id": 43941, "title": "Freestyle Hip-Hop 1"}, {"artist": "The Old School", "id": 43942, "title": "Freestyle Hip-Hop 2"}, {"artist": "The Old School", "id": 43943, "title": "Freestyle Hip-Hop 3"}, {"artist": "Elton John", "id": 3757034, "title": "Tiny Dancer"}, {"artist": "All American Rejects", "id": 3760028, "title": "Gives You Hell"}, {"artist": "Rihanna", "id": 3771028, "title": "Disturbia"}, {"artist": "Lupe Fiasco", "id": 3780037, "title": "Superstar"}, {"artist": "Michael Jackson", "id": 3786018, "title": "You Are Not Alone"}, {"artist": "Bobby McFerrin", "id": 3794023, "title": "Don't Worry, Be Happy"}, {"artist": "Coldplay", "id": 3797028, "title": "Viva La Vida"}, {"artist": "Eurythmics", "id": 3805021, "title": "Sweet Dreams"}, {"artist": "Celine Dion", "id": 3817019, "title": "It's All Coming Back To Me Now"}, {"artist": "Owl City", "id": 3831024, "title": "Fireflies"}, {"artist": "Maroon 5", "id": 3836015, "title": "Makes Me Wonder"}, {"artist": "Christina Aguilera", "id": 6447057, "title": "Impossible"}, {"artist": "The Supremes", "id": 6455037, "title": "I Hear A Symphony"}, {"artist": "Conway Twitty", "id": 6457062, "title": "Hello Darlin'"}, {"artist": "Alicia Bridges", "id": 6460045, "title": "I Love The Nightlife"}, {"artist": "Ritchie Valens", "id": 6462054, "title": "La Bamba"}, {"artist": "The Commodores", "id": 6462056, "title": "Three Times A Lady"}, {"artist": "Marvin Gaye", "id": 6479049, "title": "Mercy, Mercy Me"}, {"artist": "Alicia Keys", "id": 6483052, "title": "A Woman's Worth"}, {"artist": "Tony Bennett", "id": 6486045, "title": "I Left My Heart In San Francisco"}, {"artist": "Judy Garland", "id": 6489052, "title": "Over The Rainbow"}, {"artist": "Amy Winehouse", "id": 6490043, "title": "Rehab"}, {"artist": "Nena", "id": 6491049, "title": "99 Red Balloons"}, {"artist": "Pink with Steven Tyler", "id": 6500063, "title": "Misery"}, {"artist": "Marvin Gaye", "id": 6503052, "title": "Sexual Healing"}, {"artist": "Diana Ross", "id": 6505039, "title": "Ain't No Mountain High Enough"}, {"artist": "Elvis Presley", "id": 6508056, "title": "Burning Love"}, {"artist": "The Temptations", "id": 6525056, "title": "Just My Imagination (Running Away With Me)"}, {"artist": "En Vogue", "id": 6535061, "title": "My Lovin' (You're Never Gonna Get It)"}, {"artist": "Blink 182", "id": 6549052, "title": "All The Small Things"}, {"artist": "The Temptations", "id": 6549053, "title": "The Way You Do The Things You Do"}, {"artist": "Earth, Wind & Fire", "id": 6567052, "title": "Shining Star"}, {"artist": "Juice Newton", "id": 6572065, "title": "Angel Of The Morning"}, {"artist": "Blink 182", "id": 6574059, "title": "What's My Age Again?"}, {"artist": "The Temptations", "id": 6592040, "title": "Ain't Too Proud To Beg"}, {"artist": "Otis Day & The Knights", "id": 6596032, "title": "Shout"}, {"artist": "Marvin Gaye / Tammi Terrell", "id": 6603008, "title": "Ain't Nothing Like The Real Thing"}, {"artist": "The Supremes", "id": 6603010, "title": "You Keep Me Hangin' On"}, {"artist": "Mr. Big", "id": 6604008, "title": "To Be With You"}, {"artist": "Willie Nelson", "id": 6606002, "title": "Whiskey River"}, {"artist": "Johnny Cash", "id": 6771977, "title": "Highway Man"}, {"artist": "Melissa Etheridge", "id": 6775803, "title": "Breathe"}, {"artist": "Snow Patrol", "id": 6775813, "title": "Chasing Cars"}, {"artist": "Jefferson's TV Theme", "id": 6782000, "title": "Movin' On Up"}, {"artist": "The Fray", "id": 6817832, "title": "Over My Head (Cable Car)"}, {"artist": "The Fray", "id": 6819864, "title": "Look After You"}, {"artist": "Hootie & the Blowfish", "id": 6820993, "title": "Hold My Hand"}, {"artist": "Rod Stewart", "id": 6826782, "title": "Have I Told You Lately (I Love You)"}, {"artist": "Goo Goo Dolls", "id": 6859551, "title": "Better Days"}, {"artist": "David Cook", "id": 6883804, "title": "Light On"}, {"artist": "Lynyrd Skynyrd", "id": 6884948, "title": "Free Bird"}, {"artist": "The Who", "id": 6886416, "title": "Baba O'Riley"}, {"artist": "Rob Thomas", "id": 6895674, "title": "Her Diamonds"}, {"artist": "Slumdog Millionaire", "id": 6895814, "title": "Jai Ho"}, {"artist": "The Who", "id": 6904874, "title": "Pinball Wizard"}, {"artist": "Peter Frampton", "id": 6911595, "title": "Baby I Love Your Way"}, {"artist": "The Carpenters", "id": 6915321, "title": "Top Of The World"}, {"artist": "Jefferson Airplane", "id": 6916192, "title": "Somebody To Love"}, {"artist": "Jars Of Clay", "id": 6916702, "title": "Flood"}, {"artist": "Regina Spektor", "id": 6921901, "title": "Fidelity"}, {"artist": "Beyonce", "id": 6922971, "title": "Ego"}, {"artist": "James Blunt", "id": 6923269, "title": "Out Of My Mind"}, {"artist": "Kiss", "id": 6923998, "title": "I Was Made For Lovin' You"}, {"artist": "Rob Thomas", "id": 6928400, "title": "Little Wonders"}, {"artist": "Elton John", "id": 6928932, "title": "Candle In The Wind"}, {"artist": "Wizard Of Oz", "id": 6930590, "title": "We're Off To See The Wizard"}, {"artist": "The Fray", "id": 6937445, "title": "You Found Me"}, {"artist": "Keith Urban", "id": 6938119, "title": "I Told You So"}, {"artist": "The Cure", "id": 6938839, "title": "Just Like Heaven"}, {"artist": "Hinder", "id": 6940943, "title": "Better Than Me"}, {"artist": "Scott McKenzie", "id": 6941697, "title": "San Francisco Be Sure To Wear Flowers In Your Hair"}, {"artist": "Maroon 5", "id": 6941780, "title": "Wake Up Call"}, {"artist": "Dashboard Confessional", "id": 6942254, "title": "Hands Down"}, {"artist": "Alabama", "id": 6949251, "title": "Forty Hour Week (For A Livin')"}, {"artist": "New Found Glory", "id": 6961731, "title": "Head On Collision"}, {"artist": "T-Pain", "id": 6961891, "title": "I'm Sprung"}, {"artist": "Daughtry", "id": 6962975, "title": "Home"}, {"artist": "Regina Spektor", "id": 6969073, "title": "Hotel Song"}, {"artist": "Mumford & Sons", "id": 6969197, "title": "Little Lion Man"}, {"artist": "Flaming Lips", "id": 6971500, "title": "She Don't Use Jelly"}, {"artist": "David Cook", "id": 6981326, "title": "Time Of My Life"}, {"artist": "Rihanna", "id": 6989777, "title": "Russian Roulette"}, {"artist": "Jordin Sparks", "id": 6990916, "title": "This Is My Now"}, {"artist": "Eminem feat. Rihanna", "id": 6994944, "title": "Love The Way You Lie"}, {"artist": "Fleetwood Mac", "id": 7004366, "title": "You Make Lovin' Fun"}, {"artist": "Katherine McPhee", "id": 7010376, "title": "My Destiny"}, {"artist": "Hinder", "id": 7013360, "title": "Lips Of An Angel"}, {"artist": "Gym Class Heroes", "id": 7024576, "title": "Cupid's Chokehold"}, {"artist": "Bobby Darin", "id": 7024772, "title": "Splish Splash"}, {"artist": "Chamillionaire Feat. Krayzie Bone", "id": 7026666, "title": "Ridin"}, {"artist": "Dashboard Confessional", "id": 7026776, "title": "Stolen"}, {"artist": "Kiss", "id": 7030723, "title": "Love Gun"}, {"artist": "Brian McKnight", "id": 7030755, "title": "One Last Cry"}, {"artist": "Elton John", "id": 7034806, "title": "Rocket Man"}, {"artist": "Five For Fighting", "id": 7047179, "title": "The Riddle"}, {"artist": "Daft Punk", "id": 7116474, "title": "Technologic"}, {"artist": "James Blunt", "id": 7410982, "title": "Tears And Rain"}, {"artist": "Third Eye Blind", "id": 7413953, "title": "Semi Charmed Life"}, {"artist": "Hootie & the Blowfish", "id": 7416057, "title": "Let Her Cry"}, {"artist": "The Supremes", "id": 7417943, "title": "You Can't Hurry Love"}, {"artist": "Air Supply", "id": 7421018, "title": "All Out Of Love"}, {"artist": "Tlc", "id": 7421037, "title": "Creep"}, {"artist": "Alicia Keys", "id": 7421041, "title": "No One"}, {"artist": "N Sync", "id": 7422933, "title": "I Want You Back"}, {"artist": "Pussycat Dolls", "id": 7431950, "title": "Don't Cha"}, {"artist": "Elton John", "id": 7434905, "title": "Bennie And The Jets"}, {"artist": "Kelis", "id": 7434910, "title": "Trick Me"}, {"artist": "Daniel Bedingfield", "id": 7439957, "title": "Gotta Get Thru This"}, {"artist": "Mandy Moore", "id": 7444928, "title": "Cry"}, {"artist": "Phil Vasser", "id": 7446003, "title": "That's When I Love You"}, {"artist": "Britney Spears", "id": 7448917, "title": "I'm A Slave 4 U"}, {"artist": "Rooney", "id": 7449998, "title": "I'm Shakin'"}, {"artist": "Elton John", "id": 7451390, "title": "Goodbye Yellow Brick Road"}, {"artist": "Britney Spears", "id": 7451391, "title": "Stronger"}, {"artist": "Backstreet Boys", "id": 7453892, "title": "As Long As You Love Me"}, {"artist": "Tavares", "id": 7462881, "title": "Heaven Must Be Missing An Angel"}, {"artist": "Natasha Bedingfield", "id": 7462883, "title": "Single"}, {"artist": "The Temptations", "id": 7466184, "title": "My Girl"}, {"artist": "Adele", "id": 7466885, "title": "Chasing Pavements"}, {"artist": "Backstreet Boys", "id": 7470022, "title": "Everybody (Backstreet's Back)"}, {"artist": "Fall Out Boy", "id": 7472873, "title": "America's Suitehearts"}, {"artist": "All American Rejects", "id": 7475874, "title": "Dirty Little Secret"}, {"artist": "50 Cent", "id": 7476246, "title": "Disco Inferno"}, {"artist": "Paula Abdul", "id": 7478018, "title": "Straight Up"}];

		inject(function($injector, $rootScope) {
			scope = $rootScope.$new();
			scope.songObj = { arr: songList };
			songService = $injector.get( 'songService' );
			$httpBackend = $injector.get( '$httpBackend' );
		});
	});

	it('should make five methods available', function() {
		expect( songService.addSong ).toBeDefined();
		expect( songService.removeSong ).toBeDefined();
		expect( songService.getId ).toBeDefined();
		expect( songService.getSongs ).toBeDefined();
		expect( songService.getTitle ).toBeDefined();
	});

	it('should not be possible to access the service\'s internal methods', function() {
		expect( songService.generateObject ).not.toBeDefined();
		expect( songService.getSongList ).not.toBeDefined();
		expect( songService.addSongToScope ).not.toBeDefined();
		expect( songService.removeSongFromScope ).not.toBeDefined();
	});

	it('getSongs should ask the api for a songlist if the internal songObj is undefined', function() {
		$httpBackend.expectGET( sm.apiRoutes.getAllSongs ).respond( songList );
		songService.getSongs();
		$httpBackend.flush();
	});

	it('getSongs should return the songlist from the api as the "arr" field of an object', function() {
		$httpBackend.expectGET( sm.apiRoutes.getAllSongs ).respond( songList );
		scope.songList = songService.getSongs();
		$httpBackend.flush();

		expect( scope.songList.arr ).toBeDefined();
	});

	it('getId should return the id of a song', function() {
		$httpBackend.expectGET( sm.apiRoutes.getAllSongs ).respond( songList );
		scope.songList = songService.getSongs();
		scope.songModel = {};
		$httpBackend.flush();

		expect( songService.getId( 'Paula Abdul - Straight Up') ).toBe( 7478018 );
	});

	it('getTitle should return the title of a song', function() {
		$httpBackend.expectGET( sm.apiRoutes.getAllSongs ).respond( songList );
		scope.songList = songService.getSongs();
		$httpBackend.flush();

		expect( songService.getTitle( 7478018 ) ).toBe( 'Paula Abdul - Straight Up' );
	});

	it("addSong should copy a song id from a scope's songModel to a songList, if no options are passed in", function() {
		scope.data = { songList: [] };
		scope.songModel = 'Paula Abdul - Straight Up';
		scope.returnId = songService.getId;

		$httpBackend.expectGET( sm.apiRoutes.getAllSongs ).respond( songList );
		scope.songList = songService.getSongs();
		$httpBackend.flush();
		songService.addSong( scope );

		expect( scope.data.songList ).toContain( 7478018 );
	});

	it("addSong should copy a song id from a scope's songModel to an app-specific songList", function() {
		scope.data = { sm: { songList: { us: [] } } };
		scope.songModel = { us: 'Paula Abdul - Straight Up' };
		scope.returnId = songService.getId;

		$httpBackend.expectGET( sm.apiRoutes.getAllSongs ).respond( songList );
		scope.songList = songService.getSongs();
		$httpBackend.flush();
		songService.addSong( scope, ['us', 'sm'] );

		expect( scope.data.sm.songList.us ).toContain( 7478018 );
	});

	it("removeSong should remove a song id from a scope's app-specific songList", function() {
		scope.data = { sm: { songList: { us: [ 1234, 7478018 ] } } };
		$httpBackend.expectGET( sm.apiRoutes.getAllSongs ).respond( songList );
		scope.songList = songService.getSongs();
		$httpBackend.flush();
		songService.removeSong( scope, 7478018, ['us', 'sm'] );

		expect( scope.data.sm.songList.us ).not.toContain( 7478018 );
		expect( scope.data.sm.songList.us ).toContain( 1234 );
	});
});
