#class X():
 #   def hello():
   #     print("hello world")
   # hello()

class Car(object):
    def __init__(self, model, color, company, speed_limit):
        self.color = color
        self.model = model
        self.company = company
        self.speed_limit = speed_limit

    def start(self):
        print('started')

    def stop(self):
        print('stopped')

    def accelarate(self):
        print('accelarating')

    def change_gear(self):
        print('changing gear')

audi = Car('A6', 'blue', 'audi', '200')
audi.color