Vue.createApp({
    data: ()=> ({
      res: '',
      nums: [1,2,3,4,5,6,7,8,9,0],
      operations: ['+','-','*','/'],
      t: '.',
}),
    methods: {
    	charinput(num) {
    		n = num%10
    		this.modeinput(n)
    	},
    	modeinput(op) {
    		this.res = this.res.toString()
    		this.res += (op)
    	},
    	reset() {
    		this.res = ''

    	},
    	calc() {
    		this.res = eval(this.res)
    	},
    	pop() {
    		this.res = this.res.substr(0, this.res.length-1)
    	}
}

}
).mount('#app')