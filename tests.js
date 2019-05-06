describe("Эльф должен делать простые движения", function() {
	it("поднять левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 0]);
			done();
		})
	});

	it("поднять правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 0]);
			done();
		})
	});

	it("поднять обе руки", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		AboveHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		})
	});

	it("Выставить правую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightLegOut(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 0]);
			done();
		})
	});
});
