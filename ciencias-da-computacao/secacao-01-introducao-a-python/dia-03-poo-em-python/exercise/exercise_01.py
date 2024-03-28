# Implemente a classe com base no diagrama


class TV:
    def __init__(self, size: int):
        self.volume = 50
        self.channel = 1
        self.size = f"{size} inches"
        self.is_on = False

    def volume_up(self) -> None:
        if self.volume < 99:
            self.volume += 1

    def volume_down(self) -> None:
        if self.volume > 0:
            self.volume -= 1

    def channel_up(self) -> None:
        if self.channel < 99:
            self.channel += 1

    def channel_down(self) -> None:
        if self.channel > 0:
            self.channel -= 1

    def turn_on_turn_off(self) -> None:
        self.is_on = not self.is_on

    def __repr__(self) -> str:
        return f"""
        - TV size: {self.size}
        - Volume: {self.volume}
        - Channel: {self.channel}
        - Is on: {self.is_on}
        """


good_tv = TV(40)
good_tv.turn_on_turn_off()
good_tv.volume_down()
good_tv.volume_down()

print(good_tv.size)
print(good_tv.channel)
print(good_tv)
